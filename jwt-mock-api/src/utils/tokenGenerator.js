const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
    const payload = {
        username: user.username,
        roles: user.roles
    };
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = generateToken;