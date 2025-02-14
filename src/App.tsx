import React, { useState } from "react";
import ToDoApp from "./ToDoApp";
import Projects from "./Projects";
import MuiProjects from "./MuiProjects";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">To-Do App</Link>
          </li>
          <li>
            <Link to="/projects">Projects App</Link>
          </li>
          <li>
            <Link to="/mui-projects">MUI Projects App</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/todos" element={<ToDoApp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mui-projects" element={<MuiProjects />} />
          <Route path="/" element={<div>Welcome to the Home Page!</div>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;