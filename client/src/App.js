import "./App.css";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import Students from "./components/Students";

const App = () => {
  return (
    <div className="App">
      <Student />
      <Students />
    </div>
  );
};

export default App;
