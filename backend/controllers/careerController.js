const Career = require('../models/Career');

const addCareer = async (req, res) => {
  try {
    const { title, jobDescription, skillsRequired, qualifications, averageSalary, roadmap } = req.body;

    if (!title || !jobDescription || !skillsRequired || !qualifications || !averageSalary || !roadmap) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const existing = await Career.findOne({ title });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Career with this title already exists' });
    }

    const career = await Career.create({
      title,
      jobDescription,
      skillsRequired,
      qualifications,
      averageSalary,
      roadmap
    });

    res.status(201).json({ success: true, message: 'Career added successfully', data: career });
  } catch (error) {
    console.error('Error adding career:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updateCareer = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Career.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.status(200).json({ success: true, message: 'Career updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating career:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: careers });
  } catch (error) {
    console.error('Error fetching careers:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }
    res.status(200).json({ success: true, data: career });
  } catch (error) {
    console.error('Error fetching career:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  addCareer,
  updateCareer,
  getAllCareers,
  getCareerById
};
