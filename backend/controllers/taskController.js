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
            const task = await TaskModel.findById(id);
            if(!task){
                res.status(404).json({msg: "Task not found!"});
                return
            }
            res.status(200).json(task);
        }catch(error){
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            const taskById = await TaskModel.findById(id);
            if(!taskById){
                res.status(404).json({msg: "Task not found!"});
                return;
            }
            const taskDeleted = await TaskModel.findByIdAndDelete(id);
            res.status(200).json({taskDeleted, msg: "Task deleted"});
        }catch(error){
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const task = {};
            task.name = req.body.name;
            task.description = req.body.description;
            task.status = req.body.status;
            task.subTask = req.body.subTask;
        const updateTask = await TaskModel.findByIdAndUpdate(id, task);
        if(!updateTask){
            res.status(404).json({msg: "Task not found!"});
            return;
        }
        res.status(200).json({updateTask, msg: "Task updated"})
    }
}
module.exports = taskController;