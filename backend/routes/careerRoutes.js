const express = require('express');
const router = express.Router();
const {
  addCareer,
  updateCareer,
  getAllCareers,
  getCareerById
} = require('../controllers/careerController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/add', protect, adminOnly, addCareer);
router.put('/update/:id', protect, adminOnly, updateCareer);

router.get('/all', getAllCareers);
router.get('/:id', getCareerById);

module.exports = router;
