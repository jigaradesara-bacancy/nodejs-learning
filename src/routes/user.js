const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

// GET /api/users (protected)
router.get('/', auth, getUsers);

module.exports = router;
