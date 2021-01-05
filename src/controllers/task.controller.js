const Task = require("../models/task");

module.exports = {
    async getMany(req, res) {
        try {
            //const tasks = await Task.find();
            await req.user.populate("tasks").execPopulate();
            res.send(req.user.tasks);
        } catch (error) {
            res.status(500).send();
        }
    },
    async getOne(req, res) {
        try {
            const _id = req.params.id;
            const task = await Task.findOne({ _id, owner: req.user._id });
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (error) {
            res.status(500).send();
        }
    },
    async createOne(req, res) {
        try {
            const newTask = new Task({ ...req.body, owner: req.user._id });
            await newTask.save();
            res.status(201).send(newTask);
        } catch (error) {
            res.status(201).send(error);
        }
    },
    async updateOne(req, res) {
        const updates = Object.keys(req.body);
        const allowedUpdates = ["description", "completed"];
        const isValidOperation = updates.every((update) =>
            allowedUpdates.includes(update)
        );

        if (!isValidOperation) {
            return res.status(400).send({ error: "Invalid updates!" });
        }

        try {
            const _id = req.params.id;
            const task = await Task.findOne({ _id, owner: req.user._id });

            if (!task) {
                return res.status(400).send("Task not found");
            }

            updates.forEach((update) => (task[update] = req.body[update]));
            await task.save();

            res.send(task);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteOne(req, res) {
        try {
            const _id = req.params.id;
            const task = await Task.findOneAndDelete({
                _id,
                owner: req.user._id,
            });
            if (task) {
                return res.send("Task Deleted");
            }
            res.status(404).send("Task not found");
        } catch (error) {
            res.status(500).send();
        }
    },
};
