const express = require("express");
const router = express.Router();
const {
  getAlltask,
  gettaskById,
  addtask,
  updatetask,
  deletetask,
} = require("../controllers/taskController");

// Route definitions
router.get("/", getAlltask);
router.get("/:id", gettaskById);
router.post("/", addtask);
router.put("/:id", updatetask);
router.delete("/:id", deletetask);

module.exports = router;