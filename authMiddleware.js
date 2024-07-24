// middleware /authMiddleware.js


const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');
  

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.header.authorization;

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Invalid token

            }
            req.user = user, // Attach user to request
            next(); // Continue to the next middlewear or route handler
        });
    } else {
        res.sendStatus(401) // No token provided)
    }

};

module.exports = authenticateJWT;