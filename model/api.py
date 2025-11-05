import joblib
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel, Field
import sys

# --- 1. Load Model and Encoder ---

# Define file paths
MODEL_PATH = 'profession_model.joblib'
ENCODER_PATH = 'profession_encoder.joblib'

# Load the artifacts
try:
    model = joblib.load(MODEL_PATH)
    encoder = joblib.load(ENCODER_PATH)
    print("--- Model and Encoder loaded successfully ---")
except FileNotFoundError:
    print(f"Error: Model ('{MODEL_PATH}') or Encoder ('{ENCODER_PATH}') not found.")
    print("Please run 'model.py' first to train the model and save the files.")
    sys.exit(1) # Exit the script if files aren't found
except Exception as e:
    print(f"An error occurred while loading files: {e}")
    sys.exit(1)


# --- 2. Define Input Data Model ---

# This class defines the structure of the JSON data
# that your API endpoint will expect.
# We use 'Field' to provide an example for the /docs
class IntelligenceScores(BaseModel):
    linguistic: float = Field(..., example=8.0)
    musical: float = Field(..., example=7.0)
    bodily: float = Field(..., example=6.0)
    logical_mathematical: float = Field(..., example=9.0)
    spatial_visualization: float = Field(..., example=5.0)
    interpersonal: float = Field(..., example=7.0)
    intrapersonal: float = Field(..., example=8.0)
    naturalist: float = Field(..., example=6.0)

    # Note: The field names (e.g., 'logical_mathematical') are converted
    # from the 'Logical - Mathematical' column name for cleaner API use.
    # We will match them by order in the /predict endpoint.


# --- 3. Initialize FastAPI App ---

app = FastAPI(
    title="Profession Predictor API",
    description="An API to predict job professions based on multiple intelligence scores.",
    version="1.0.0"
)


# --- 4. Define API Endpoints ---

@app.get("/", tags=["Health Check"])
async def root():
    """A simple health check endpoint."""
    return {"message": "Profession Predictor API is running."}


@app.post("/predict", tags=["Prediction"])
async def predict_profession(scores: IntelligenceScores):
    """
    Receives 8 intelligence scores and returns a
    predicted job profession.
    """
    try:
        # 1. Convert Pydantic model to a list in the correct order
        #    This order MUST match the 'feature_columns' in your model.py
        features = [
            scores.linguistic,
            scores.musical,
            scores.bodily,
            scores.logical_mathematical,
            scores.spatial_visualization,
            scores.interpersonal,
            scores.intrapersonal,
            scores.naturalist
        ]
        
        # 2. Reshape for sklearn (it expects a 2D array: [1 sample, 8 features])
        input_data = [features]

        # 3. Make prediction (returns an encoded label, e.g., [5])
        encoded_prediction = model.predict(input_data)
        
        # 4. Decode the label back to the string name (e.g., ['Astronomer'])
        predicted_profession_name = encoder.inverse_transform(encoded_prediction)

        # 5. Return the result
        return {
            "predicted_profession": predicted_profession_name[0],
            "input_scores": scores
        }
    except Exception as e:
        # Return an error message if something goes wrong
        return {"error": str(e)}


# --- 5. Run the API (optional) ---

if __name__ == "__main__":
    # This allows you to run the script directly with: python api.py
    # For development, 'uvicorn api:app --reload' is better
    print("--- Starting FastAPI server on http://127.0.0.1:8000 ---")
    uvicorn.run(app, host="127.0.0.1", port=8000)