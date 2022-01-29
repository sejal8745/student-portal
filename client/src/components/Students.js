import React, { useEffect, useState } from "react";
import stTable from "./StudentTable";
import axios from "axios";

export default function Students() {
  const { students, setStudents } = useState([]);
  const { isdeleted, setIsdeleted } = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((res) => {
      const stdata = res.data;
      setStudents(stdata);
      console.log("data hello!");
    });
  }, []);

  const onDelete = async (rollno) => {
    const saved = await axios.delete(
      `http://localhost:3000/students/delete?rollno=${rollno}`
    );
    if (!saved) alert("oops! data deleted");
    else setIsdeleted(true);
  };

  const tablular = () => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Roll No.</td>
              <td>Student Name</td>
              <td>Standard</td>
              <td>Roll No.</td>
            </tr>
          </thead>
          <tbody>
            {students.map((e) => (
              <tr key={e.rollno}>
                <td>{e.name}</td>
                <td>{e.standard}</td>
                <td>{e.rollno}</td>
                <td>
                  <button type="submit" onClick={() => onDelete(e.rollno)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return <div>{students?.length ? tablular() : null}</div>;
}
