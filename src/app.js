// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const { connectToDatabase } = require('./config/db.config');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectToDatabase();

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;