const task = require('../models/taskModel');

const getAllTask = (req, res) => {
    res.send('<h1> Get All Tasks </h1>');
};

const getTask = (req, res) => {
    res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
    const result = await task.create(req.body);
    res.json(result);
};

const updateTask = (req, res) => {
    res.send('<h1> Update Task </h1>');
};

const deleteTask = (req, res) => {
    res.send('<h1> Delete Task </h1>');
};

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
