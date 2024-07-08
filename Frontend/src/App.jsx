import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
