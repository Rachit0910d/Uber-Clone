const { body } = require('express-validator');
const userController = require('../controllers/user.controller.js');
const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware.js');
const router = express.Router();


router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email").notEmpty().withMessage("Email is required"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least 3 characters long").notEmpty().withMessage("First name is required"),
    body('fullname.lastname').isLength({ min: 3 }).withMessage("Last name must be at least 3 characters long").optional(),
    body('password').isLength({ min: 6 }).withMessage('Password must at least 6 characters long').notEmpty().withMessage("Password is required"),
], userController.registerUser)


router.post('/login', [
    body('email').isEmail().withMessage("Invalid email").notEmpty().withMessage("Email is required"),
    body('password').isLength({ min: 6 }).withMessage("password must be at least 6 charcters long!"),
], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser);
module.exports = router;