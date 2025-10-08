const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/userController');

// Protected routes (User/Admin)
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;
