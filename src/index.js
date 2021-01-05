const express = require("express");
require("./db/mongoose");

const app = express();

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down. Check back soon!");
// });

app.use(express.json());

const port = process.env.PORT || 3000;

const UserRoutes = require("./routes/user.routes");
const TaskRoutes = require("./routes/task.routes");

app.use("/api/users", UserRoutes);
app.use("/api/tasks", TaskRoutes);

app.listen(port, () => {
    console.log("Server up on port " + port);
});
