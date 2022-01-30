import React, { useState } from "react";
import axios from "axios";

export default function Student(props) {
  const { name, setName } = useState("");
  const { standard, setStandard } = useState("");
  const { rollno, setRollno } = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const saved = await axios.post("http://localhost:3000/students", {
      name,
      standard,
      rollno,
    });
    if (!saved) alert("oops! data didn't saved");
    else console.log("data saved");
  };

  return (
    <div>
      <h3>Hello Student</h3>

      <div className="form">
        <div classroom="tag">
          <label>Student Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div classroom="tag">
          <label>Standard: </label>
          <input
            type="text"
            placeholder="Enter the standard"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          />
        </div>
        <div classroom="tag">
          <label>Roll No.: </label>
          <input
            type="text"
            placeholder="Enter your rollno"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>
        <button type="submit" onSubmit={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
