// src/components/TaskListsPanel.js
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Adjust the import path

const TaskListsPanel = () => {
  const { listTaskLists } = useFirebase();
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    const fetchTaskLists = async () => {
      try {
        const taskListsData = await listTaskLists();
        setTaskLists(taskListsData);
      } catch (error) {
        console.error("Error fetching task lists: ", error);
      }
    };

    fetchTaskLists();
  }, [listTaskLists]);

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
          {taskLists.map((taskList, index) => (
            <tr key={index}>
              <td>{taskList.listName}</td>
              <td>{taskList.userEmail}</td>
              <td>{taskList.tasks.length}</td>
              <td>{formatDateTime(taskList.createdAt)}</td>
              <td>{formatDateTime(taskList.tasks[0]?.createdAt)}</td> {/* Example for last updated time of the first task */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to format timestamp to readable date/time
const formatDateTime = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JavaScript Date object
  return date.toLocaleString(); // Adjust formatting as per your preference
};

export default TaskListsPanel;
