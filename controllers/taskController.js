const task = require('../models/taskModel');

const getAllTask = async (req, res) => {
    try {
        const result = await task.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const result = await task.findOne({ _id: taskId });
        if (!result) {
            return res
                .status(404)
                .json({ error: `Could not find task with id ${taskId}` });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createTask = async (req, res) => {
    try {
        const result = await task.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const result = await task.findOneAndDelete({ _id: taskId });
        if (!result) {
            return res
                .status(404)
                .json({ error: `Could not find task with id ${taskId}` });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const result = await task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            return res
                .status(404)
                .json({ error: `Could not find task with id ${taskId}` });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
