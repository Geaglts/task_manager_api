const { Router } = require("express");
const auth = require("../middleware/auth");

const router = new Router();

const TaskController = require("../controllers/task.controller");

router
    .route("/")
    .get(TaskController.getMany)
    .post(auth, TaskController.createOne);

router
    .route("/:id")
    .get(TaskController.getOne)
    .put(TaskController.updateOne)
    .delete(TaskController.deleteOne);

module.exports = router;
