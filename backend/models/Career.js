const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    jobDescription: {
      type: String,
      required: true
    },
    skillsRequired: {
      type: [String],
      required: true
    },
    qualifications: {
      type: String,
      required: true
    },
    averageSalary: {
      type: String,
      required: true
    },
    roadmap: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Career', careerSchema);
