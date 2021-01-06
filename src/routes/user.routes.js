const { Router } = require("express");
const multer = require("multer");
const auth = require("../middleware/auth");

const router = new Router();

const upload = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(
                new Error(
                    "Please upload an image with extention jpg, jpeg or png."
                )
            );
        }

        cb(undefined, true);
    },
});

const UserController = require("../controllers/user.controller");

router.route("/").get(UserController.getMany).post(UserController.createOne);

router
    .route("/me/avatar")
    .post(
        auth,
        upload.single("avatar"),
        UserController.uploadAvatar,
        (error, req, res, next) => {
            res.status(400).send({ error: error.message });
        }
    )
    .delete(auth, UserController.deleteAvatar);

router
    .route("/me")
    .get(auth, UserController.me)
    .put(auth, UserController.updateOne)
    .delete(auth, UserController.deleteOne);

router.post("/login", UserController.login);
router.post("/logout", auth, UserController.logout);
router.post("/logoutAll", auth, UserController.logoutAll);

router.get("/:id/avatar", UserController.findAvatar);

module.exports = router;
