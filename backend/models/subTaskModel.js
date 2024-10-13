const mongoose = require("mongoose");
const { Schema } = mongoose;
const subTaskSchema = new Schema({
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
    }    
}, {timestamp: true });
const subTask = mongoose.model("subTask", subTaskSchema);
module.exports = {
    subTask,
    subTaskSchema
}