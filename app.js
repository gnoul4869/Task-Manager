const express = require('express');
const app = express();
const taskRoute = require('./routes/taskRoute');
const connectDb = require('./db/connect');
require('dotenv').config();
const page404 = require('./middlewares/page404');

const port = 3000;

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRoute);
app.use(page404);

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
