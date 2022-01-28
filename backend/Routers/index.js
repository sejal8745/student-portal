const express = require("express");
const {
  getAllstudent,
  createStudent,
  deleteStudent,
} = require("../Controllers/studentControllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey That's me!");
});

router.get("/students", getAllstudent);
router.post("/students", createStudent);
router.delete("/students/delete", deleteStudent);

module.exports = router;
