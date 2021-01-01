const { connect } = require("mongoose");

connect("mongodb://127.0.0.1/task-manager-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
