const router = require("express").Router();
const subTaskController = require("../controllers/subTaskController");
router
    .route("/tasks")
    .post((req, res) => subTaskController.create(req, res));
module.exports = router; 