// controlls the action like adding the student names, delete any data

const Student = require("../Models/student");

const getAllstudent = async (req, res) => {
  const students = await Student.find();

  res.send(students);
};

const createStudent = async (req, res) => {
  const { name, rollno, standard } = req.body; //post route

  // student profile
  const student = new Student({ name, rollno, standard });
  //first save the details

  const profile = await student.save();

  res.send(profile);
};

const deleteStudent = async (req, res) => {
  const { rollno } = req.query;

  const result = await Student.deleteOne({ rollno: +rollno });

  res.send(result);
};

module.exports = {
  getAllstudent,
  createStudent,
  deleteStudent,
};
