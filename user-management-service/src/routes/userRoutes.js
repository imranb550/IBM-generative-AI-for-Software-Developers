/* Define the API routes for:
    // user registration
    // login
    // profile management
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:username', userController.updateUserProfile);

module.exports = router;