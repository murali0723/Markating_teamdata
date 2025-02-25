// src/routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validateRequest = require('../middleware/validateRequest');
const userSchema = require('../schemas/user.schema');


// Create a new user
router.post('/', validateRequest(userSchema), userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/:id', validateRequest(userSchema), userController.updateUser);

// Delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;