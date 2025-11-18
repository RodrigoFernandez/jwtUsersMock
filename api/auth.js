const express = require('express');
const jwt = require('jsonwebtoken');
const { mockUsers } = require('../src/mockData');
const router = express.Router();
const config = require('../src/config');

// User login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username, roles: user.roles }, config.secretKey, { expiresIn: '1h' });
    res.json({ token, user: { username: user.username, roles: user.roles } });
});

// Token generation route (optional, can be used for testing)
router.post('/token', (req, res) => {
    const { username } = req.body;
    const user = mockUsers.find(u => u.username === username);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ username: user.username, roles: user.roles }, config.secretKey, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;