const express = require('express');
const { loginController, RegisterController } = require('../controllers/userControllers');

// router object
const router = express.Router();

// router

// Login router -> Method Post
router.post('/login',loginController)

// Register router -> Method Post
router.post('/register',RegisterController)

module.exports = router;