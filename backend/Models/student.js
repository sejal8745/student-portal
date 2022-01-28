// it decides how student should look like basically contain the mongoose data

const mongoose = require("mongoose");

const student = new mongoose.Schema(
  {
    name: String,
    standard: String,
    rollno: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("student", student);

module.exports = Student;
