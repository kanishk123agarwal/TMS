const express = require("express");
const { getAllTask, postCreateTask, putUpdateTask, deleteTask } = require("../controllers/taskController");
const router = express.Router();

/**
 * @route GET api/task
 * @description get all task
 * @access public
 */
router.get("/",getAllTask);

/**
 * @route POST api/task
 * @description add a new task
 * @access public
 */
router.post("/",postCreateTask);

/**
 * @route PUT api/task/:id
 * @description update task
 * @access public
 */
router.put("/:id",putUpdateTask);

/**
 * @route DELETE api/task/:id
 * @description delete task
 * @access public
 */
router.delete("/:id",deleteTask);

module.exports = router;
