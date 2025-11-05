const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
  try {
    const { userId, fullName, email, message } = req.body;

    if (!userId || !fullName || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const feedback = await Feedback.create({ userId, fullName, email, message });
    res.status(201).json({ success: true, message: 'Feedback submitted successfully', data: feedback });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: feedbacks });
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { submitFeedback, getAllFeedbacks };
