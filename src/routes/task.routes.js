const { Router } = require("express");

const router = new Router();

const TaskController = require("../controllers/task.controller");

router.route("/").get(TaskController.getMany).post(TaskController.createOne);

router
    .route("/:id")
    .get(TaskController.getOne)
    .put(TaskController.updateOne)
    .delete(TaskController.deleteOne);

module.exports = router;
