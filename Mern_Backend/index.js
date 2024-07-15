const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://root:root@cluster0.0mxcxat.mongodb.net/', {
  dbName: 'Cluster0', // Specify your database name here
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
