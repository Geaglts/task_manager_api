const { Router } = require("express");
const auth = require("../middleware/auth");

const router = new Router();

const UserController = require("../controllers/user.controller");

router.route("/").get(UserController.getMany).post(UserController.createOne);

router
    .route("/me")
    .get(auth, UserController.me)
    .put(auth, UserController.updateOne)
    .delete(auth, UserController.deleteOne);

router.post("/login", UserController.login);
router.post("/logout", auth, UserController.logout);
router.post("/logoutAll", auth, UserController.logoutAll);

module.exports = router;
