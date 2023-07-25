// JavaScript source code
// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Calculator API
app.post('/api/calculate', (req, res) => {
    const { operand1, operand2, operator } = req.body;
    let result;

    if (operator === '+') {
        result = operand1 + operand2;
    } else if (operator === '-') {
        result = operand1 - operand2;
    } else if (operator === '*') {
        result = operand1 * operand2;
    } else if (operator === '/') {
        result = operand1 / operand2;
    } else {
        return res.status(400).json({ error: 'Invalid operator' });
    }

    return res.json({ result });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

