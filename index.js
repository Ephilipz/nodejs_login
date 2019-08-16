const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.DBCONNECT, { useNewUrlParser: true }, () => console.log('Connected to DB'));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(5000, () => console.log('Server Up and Running'));