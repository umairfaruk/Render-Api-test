// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint 1: Get a greeting message
app.get('/greet', (req, res) => {
  res.json({ message: 'Hello, welcome to the Express app!' });
});

// Endpoint 2: Add two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  const sum = num1 + num2;
  res.json({ result: sum });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
