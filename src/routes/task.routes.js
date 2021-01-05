const { Router } = require("express");
const auth = require("../middleware/auth");

const router = new Router();

const TaskController = require("../controllers/task.controller");

/**
 * /tasks?completed=true
 * /tasks?limit=1&skip=0
 * /tasks?sortBy=createdAt:desc
 */

router
    .route("/")
    .get(auth, TaskController.getMany)
    .post(auth, TaskController.createOne);

router
    .route("/:id")
    .get(auth, TaskController.getOne)
    .put(auth, TaskController.updateOne)
    .delete(auth, TaskController.deleteOne);

module.exports = router;
