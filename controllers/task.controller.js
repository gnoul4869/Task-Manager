const task = require('../models/task.model');
const asyncWrapper = require('../middlewares/async-wrapper');
const { createCustomError } = require('../errors/custom-error');

const getAllTask = asyncWrapper(async (req, res) => {
    const result = await task.find({});
    res.status(200).json(result);
});

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const result = await task.findOne({ _id: taskID });
    if (!result) {
        return next(
            createCustomError(`Could not find task with id ${taskID}`, 404)
        );
    }
    res.status(200).json(result);
});

const createTask = asyncWrapper(async (req, res) => {
    const result = await task.create(req.body);
    res.status(201).json(result);
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const result = await task.findOneAndDelete({ _id: taskID });
    if (!result) {
        return next(
            createCustomError(`Could not find task with id ${taskID}`, 404)
        );
    }
    res.status(200).json(result);
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const result = await task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        return next(
            createCustomError(`Could not find task with id ${taskID}`, 404)
        );
    }
    res.status(200).json(result);
});

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
