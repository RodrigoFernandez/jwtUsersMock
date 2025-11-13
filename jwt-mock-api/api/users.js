const express = require('express');
const router = express.Router();
const { mockUsers } = require('../src/mockData');
const verifyToken = require('./middleware/verifyToken');

// Get all users
router.get('/', verifyToken, (req, res) => {
    const users = mockUsers.map(u => ({
        username: u.username,
        roles: u.roles
    }));
    res.json(users);
});

// Get user by username
router.get('/:username', verifyToken, (req, res) => {
    const user = mockUsers.find(u => u.username === req.params.username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;