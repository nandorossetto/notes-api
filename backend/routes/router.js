const router = require("express").Router();
const taskRouter = require("./tasks");
// const subTaskRouter = require("./subTasks");
router.use("/", taskRouter);
// router.use("/", subTaskRouter);
module.exports = router;