const express = require("express");
require("./db/mongoose");

const app = express();

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down. Check back soon!");
// });

// const User = require("./models/user");
// const Task = require("./models/task");

app.use(express.json());

const port = process.env.PORT || 3000;

const UserRoutes = require("./routes/user.routes");
const TaskRoutes = require("./routes/task.routes");

app.use("/api/users", UserRoutes);
app.use("/api/tasks", TaskRoutes);

app.listen(port, () => {
    console.log("Server up on port " + port);
});

// async function main() {
//     const user = await User.findById("5ff3d5a2d4b5eb0c4cb1f2ee");
//     await user.populate("tasks").execPopulate();
//     console.log(user);
// }

// main();
