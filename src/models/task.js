const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const modelTask = model("Task", taskSchema, "tasks");

module.exports = modelTask;
