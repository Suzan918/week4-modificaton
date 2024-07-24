// routes/expenseRoutes.js

const express = require('express');
const router = express.Router();
const { getExpenses, addExpense, updateExpense, deleteExpense, calculateTotalExpense } = require('../controllers/expenseController');
const authenticateJWT = require('../middleware/authMiddleware')


// Define the expense management routes
router.get('/', authenticateJWT, getExpenses); // Retrieve all expenses
router.post('/', authenticJWT, addExpense); // Add a new exense
router.put('/:id', authenticJWT,updateExpress);// Update an existing expense
router.delete('/:id', authenticateJWT, deleteExpense); // Delete an existing expense
router.get('/total', authenticateJWT, calculateTotalExpense); // Calculate total expenses


module.exports = router;