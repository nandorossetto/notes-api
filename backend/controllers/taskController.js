const TaskModel = require("../models/taskModel");
const taskController = {
    create: async(req, res) => {
        try{
            const task = {};
            task.name = req.body.name;
            task.description = req.body.description;
            task.status = req.body.status;
            task.subTask = req.body.subTask;
            const response = await TaskModel.create(task);
            res.status(201).json({response, 
                msg: "Created task"
            });
        }catch(error){
            console.log(error);
        }
    },
    getAll: async(req, res) => {
        try{
            const tasks = await TaskModel.find();
            res.status(200).json(tasks);
        }catch(error){
            console.log(error);
        }
    },
    getById: async(req, res) => {
        try{
            const id = req.params.id;
            const tasks = await TaskModel.findById(id);
            res.status(200).json(tasks);
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = taskController;