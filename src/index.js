const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const UserRoutes = require("./routes/user.routes");
const TaskRoutes = require("./routes/task.routes");

app.use("/api/users", UserRoutes);
app.use("/api/tasks", TaskRoutes);

app.listen(port, () => {
    console.log("Server up on port " + port);
});
