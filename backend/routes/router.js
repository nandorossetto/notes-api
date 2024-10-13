const router = require("express").Router();
const taskRouter = require("./tasks");
router.use("/", taskRouter);
module.exports = router;