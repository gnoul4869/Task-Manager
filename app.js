const express = require('express');
const app = express();
const taskRoute = require('./routes/task.route');
const connectDb = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRoute);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
