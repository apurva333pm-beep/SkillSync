const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    email:{ 
        type: String, 
        required: true, 
        unique: true 
    },
    password:{ 
        type: String,
        required: true 
    },
    education_level:{ 
        type: String 
    },
    interests:[{ type: String }],
    role:{ 
        type: String,
        enum: ["user", "admin"],
        default: "user" 
    },
    resetToken:{ type: String, default: "" },
    resetTokenExpiry:{ type: Date }
});

module.exports = mongoose.model("User", userSchema);
