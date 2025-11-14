const express = require('express');
const authRouter = require('./auth');
const usersRouter = require('./users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/api/users', usersRouter);

// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'JWT Mock API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
