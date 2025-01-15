const subTaskModel = require("../models/subTaskModel");
const subTaskController = {
    create: async(req, res) => {
        try{
            const subTask = {};
                subTask.name = req.body.name;
                subTask.description = req.body.description;
                subTask.status = req.body.status;
            const response = await subTaskModel.create(subTask);
            res.status(201).json({response, 
                msg: "Created sub task"
            });
        }catch(error){
            console.log(error);
        }
    }
};
module.exports = subTaskController;