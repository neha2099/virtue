import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import HomePage from "./componenets/home";
import Contact from "./componenets/contact";
import Information from "./componenets/information";
import Project1Page from "./componenets/Project1Page";
import Project2Page from "./componenets/Project2Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/Project1Page" element={<Project1Page />} />
        <Route path="/Project2Page" element={<Project2Page />} />
      </Routes>
    </Router>
  );
}

export default App;

