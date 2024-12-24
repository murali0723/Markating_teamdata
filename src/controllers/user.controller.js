// src/controllers/user.controller.js
const User = require('../models/user.model');
const userSchema = require('../schemas/user.schema');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        // Validate the request body against the schema
        const validatedData = await userSchema.validateAsync(req.body);

        // Save the validated data in the database
        const user = new User(validatedData);
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

