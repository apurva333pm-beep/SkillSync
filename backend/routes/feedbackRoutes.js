const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedbacks } = require('../controllers/feedbackController');
const adminOnly = require('../middlewares/authMiddleware');

router.post('/submit', submitFeedback);
router.get('/all', adminOnly, getAllFeedbacks);

module.exports = router;
