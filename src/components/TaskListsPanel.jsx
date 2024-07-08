// src/components/TaskListsPanel.js
import React from "react";

const TaskListsPanel = () => {
  // Simulated data for task lists
  const taskListsData = [
    {
      title: "Task List 1",
      createdBy: "amit@gmail.com",
      numTasks: 5,
      creationTime: "2024-2-01",
      lastUpdated: "2024-04-02",
    },
    {
      title: "Task List 2",
      createdBy: "manit@gmail.com",
      numTasks: 3,
      creationTime: "2024-01-02",
      lastUpdated: "2024-01-03",
    },
  ];

  return (
    <div className="panel">
      <h2>Task Lists</h2>
      <table>
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Created By</th>
            <th>No of Tasks</th>
            <th>Creation Time</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {taskListsData.map((taskList, index) => (
            <tr key={index}>
              <td>{taskList.title}</td>
              <td>{taskList.createdBy}</td>
              <td>{taskList.numTasks}</td>
              <td>{taskList.creationTime}</td>
              <td>{taskList.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListsPanel;
