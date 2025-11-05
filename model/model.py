import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import warnings
import joblib # <-- Added this import

# Suppress warnings for classification report with zero division
warnings.filterwarnings('ignore', category=UserWarning)

def train_profession_predictor(excel_file_path, sheet_name='original'):
    """
    Loads data from an Excel file, cleans it, trains a Random Forest model,
    evaluates it, and saves the model and encoder to disk.
    
    Args:
        excel_file_path (str): The path to the 'data.xlsx' file.
        sheet_name (str): The name of the sheet to read from. 
                          Defaults to 'original' based on uploaded file names.
    """
    
    # --- 1. Load Data ---
    try:
        # Load the specified sheet from the Excel file
        # Requires the 'openpyxl' library: pip install openpyxl
        df = pd.read_excel(excel_file_path, sheet_name=sheet_name)
    except FileNotFoundError:
        print(f"Error: The file '{excel_file_path}' was not found.")
        print("Please make sure the file is in the same directory as the script.")
        return
    except ImportError:
        print("Error: The 'openpyxl' library is required to read Excel files.")
        print("Please install it by running: pip install openpyxl")
        return
    except Exception as e:
        # Catch other potential errors e.g., sheet not found
        print(f"Error loading Excel file: {e}")
        return

    # --- 2. Define Features (X) and Target (y) ---
    
    # These are the 8 numerical score columns that will be our features
    feature_columns = [
        'Linguistic', 'Musical', 'Bodily', 'Logical - Mathematical', 
        'Spatial-Visualization', 'Interpersonal', 'Intrapersonal', 'Naturalist'
    ]
    
    target_column = 'Job profession'

    # Check if all required columns exist
    required_cols = feature_columns + [target_column]
    missing_cols = [col for col in required_cols if col not in df.columns]
    
    if missing_cols:
        print(f"Error: The Excel file is missing required columns: {missing_cols}")
        return

    # --- 3. Data Cleaning and Preparation ---
    
    # Drop rows where any of our feature or target columns have missing (NaN) values
    df_clean = df.dropna(subset=required_cols).copy()

    # Clean the target column: remove newline characters ('\n') and extra whitespace
    # Ensure it's treated as a string before calling .str
    df_clean[target_column] = df_clean[target_column].astype(str).str.replace('\n', '', regex=False).str.strip()

    # Create our feature matrix (X) and target vector (y)
    X = df_clean[feature_columns]
    y = df_clean[target_column]

    if len(y.unique()) < 2:
        print(f"Error: The target column '{target_column}' has only {len(y.unique())} unique value(s) after cleaning.")
        print("The model needs at least 2 different professions to make predictions.")
        return
        
    if len(df_clean) < 10:
        print(f"Warning: Very few data samples ({len(df_clean)}) available after cleaning. Model results may be unreliable.")

    # --- 4. Encode the Target Variable ---
    # The model needs numerical labels, not text strings like "Astronomer"
    # LabelEncoder converts each unique profession string into a unique number (e.g., 0, 1, 2...)
    label_encoder = LabelEncoder()
    y_encoded = label_encoder.fit_transform(y)

    # --- 5. Split Data into Training and Testing Sets ---
    try:
        # We'll use 80% of the data to train the model and 20% to test its performance.
        # 'stratify=y_encoded' ensures that the train and test sets have a similar
        # proportion of each job profession as the original dataset. This is
        # crucial if some professions are rare.
        X_train, X_test, y_train, y_test = train_test_split(
            X, y_encoded, 
            test_size=0.2, 
            random_state=42, 
            stratify=y_encoded
        )
    except ValueError:
        print("Error: Could not split data. This can happen if one job profession")
        print("has only one sample. You may need more data for this profession.")
        return

    # --- 6. Initialize and Train the Random Forest Model ---
    print("Training the Random Forest model...")
    
    # Initialize the classifier. n_estimators=100 means it will build 100 "decision trees"
    # random_state=42 ensures we get the same results every time we run the script
    model = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
    
    # Train the model using our training data
    model.fit(X_train, y_train)
    print("Model training complete.")

    # --- 7. Save the Model and Encoder ---
    # We save the model (to make predictions) and the encoder (to understand the predictions)
    model_filename = 'profession_model.joblib'
    encoder_filename = 'profession_encoder.joblib'
    
    try:
        joblib.dump(model, model_filename)
        joblib.dump(label_encoder, encoder_filename)
        print(f"\nSuccessfully saved model to: {model_filename}")
        print(f"Successfully saved label encoder to: {encoder_filename}")
    except Exception as e:
        print(f"\nError saving model or encoder: {e}")

    # --- 8. Evaluate the Model ---
    
    # Make predictions on the test data (the data the model has never seen)
    y_pred = model.predict(X_test)
    
    # Calculate the overall accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print("\n--- Model Evaluation ---")
    print(f"Overall Accuracy: {accuracy:.2%}")
    
    # Print a detailed report showing performance for each profession
    print("\nClassification Report:")
    
    # We use label_encoder.classes_ to show the actual profession names instead of numbers
    # zero_division=0 prevents warnings if a class has no samples in the test set
    report = classification_report(
        y_test, 
        y_pred, 
        target_names=label_encoder.classes_, 
        zero_division=0
    )
    print(report)


if __name__ == "__main__":
    # Run the function using the 'data.xlsx' file.
    # We assume the data is on a sheet named 'original'
    # based on your uploaded file 'data.xlsx - original.csv'
    train_profession_predictor('data.xlsx', sheet_name='original')
