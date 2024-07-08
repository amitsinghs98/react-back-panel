// src/components/TasksPanel.js
import React from "react";

const TasksPanel = () => {
  // Simulated data for tasks
  const tasksData = [
    {
      title: "Task 1",
      description: "Description for Task 1",
      taskListTitle: "Task List 1",
      createdBy: "amit@gmail.com",
    },
    {
      title: "Task 2",
      description: "Description for Task 2",
      taskListTitle: "Task List 1",
      createdBy: "manit@gmail.com",
    },
    {
      title: "Task 3",
      description: "Description for Task 3",
      taskListTitle: "Task List 2",
      createdBy: "rohan@gmail.com",
    },
  ];

  return (
    <div className="panel">
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task List Title</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {tasksData.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.taskListTitle}</td>
              <td>{task.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksPanel;
