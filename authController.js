const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');
const {findUserByUsername, addUser } = require('../models/userModel');
const authController=require('../controllers/authController');

//User registration function
const register = async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    if (findUserByUsername(username)) {
        return res.status(400).json({message: 'User already exists' });
    }

    //Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = { username, password: hashedPassword };

    // Add the new user to the in-memory storage
    addUser(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

//User login function
const login = async (req, res) => {
    const { username, password } = req.body;


    // Find the user by username
    const user = findUserByUsername(username);

    if (user && await bcrypt.compare(password, user.password)) {
        // Generate JWT token
        const token = jwt.sign({ username}, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: 'Invalid credentials' });
    }
};

module.exports = { register, login };
 





