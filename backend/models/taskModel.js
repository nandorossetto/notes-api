const mongoose = require("mongoose");
const { Schema } = mongoose;
const { subTaskSchema } = require("./subTaskModel");
const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    subTask: {
        type: [ subTaskSchema ]
    }
}, {timestamp: true });
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;