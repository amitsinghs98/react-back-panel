// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import UsersPanel from "./components/UsersPanel";
import TaskListsPanel from "./components/TaskListsPanel";
import TasksPanel from "./components/TaskPanel"; // Ensure correct path and filename

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePanel, setActivePanel] = useState("users"); // Default panel to show

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleMenuClick = (panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          <h1>Back Office Panel</h1>
          <div className="menu">
            <button onClick={() => handleMenuClick("users")}>Users</button>
            <button onClick={() => handleMenuClick("taskLists")}>
              Task Lists
            </button>
            <button onClick={() => handleMenuClick("tasks")}>Tasks</button>
          </div>
          <div className="panels">
            {activePanel === "users" && <UsersPanel />}
            {activePanel === "taskLists" && <TaskListsPanel />}
            {activePanel === "tasks" && <TasksPanel />}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
