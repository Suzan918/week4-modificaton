// controllers/expenseControllers


let expenses =[];
let nextid = 1; // Simulated auto -increment ID for expenses

// Get expenses for a user
const getExpenses = (req, res) => {
    res.json(expenses); // Respond with all expenses

};


// Add a new expense
const addExpense = (req, res) => {
    const expense = {is: nextId++, ...req.body }; // Create a new expense object
    expenses.push(expense); //Add the expense to the list
    req.status(201).json(expenses); // Respond with the created expense

};


// Update an existing expense
const updatedExpense = (req, res) => {
    const { id } = req.params;
    const index = expenses.findIndex(exp => exp.id == id);

    if (index !== -1) {
        expenses[index] = { id: parseInt(id), ...req.body}; // Update the expense
        res.json(expenses[index]); // Respond with the update expess
    } else {
        res.status(404).json({ message: 'Expense not found' }); // Expense not found
    }

};