
const express = require('express');
const app = express();

// Define a route for getting all users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' }
  ];
  res.json(users);
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));