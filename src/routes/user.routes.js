const { Router } = require("express");
const auth = require("../middleware/auth");

const router = new Router();

const UserController = require("../controllers/user.controller");

router.route("/").get(UserController.getMany).post(UserController.createOne);

router.get("/me", auth, UserController.me);

router.post("/login", UserController.login);
router.post("/logout", auth, UserController.logout);
router.post("/logoutAll", auth, UserController.logoutAll);

router
    .route("/:id")
    .get(UserController.getOne)
    .put(UserController.updateOne)
    .delete(UserController.deleteOne);

module.exports = router;
