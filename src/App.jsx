import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Admissions from "./pages/Admissions/Admissions";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;