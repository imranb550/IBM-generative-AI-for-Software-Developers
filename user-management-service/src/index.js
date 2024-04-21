/* Import the necessary dependencies,
    - Configure the Express Server and set up the API routes
    - To Start the Express Server and test the User Management Service use:
    - Tools like: Postman or by making API requests from your frontend app
*/
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});