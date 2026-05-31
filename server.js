require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();


// Database Connection
connectDB();


// Middleware
app.use(express.json());


// Routes
app.use('/api/products', productRoutes);


// Error Handler Middleware
app.use(errorHandler);


// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});