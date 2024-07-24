const express = require('express');
const app = express();
const { port } = require('./config');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');


app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/expense', expenseRoutes);

//Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:$(post)');
})