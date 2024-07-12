import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

const TasksPanel = () => {
  const { listTodos } = useFirebase();
  const [tasksData, setTasksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setError(null);
      try {
        const todos = await listTodos();
        console.log("Fetched todos:", todos); // Log fetched todos
        setTasksData(todos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos: ", error);
        setError("Failed to fetch todos. Please try again later.");
        setLoading(false);
      }
    };

    fetchTodos();
  }, [listTodos]);

  console.log("tasksData:", tasksData); // Log tasksData state
  console.log("error:", error); // Log error state

  return (
    <div className="panel">
      <h2>Tasks</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
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
                <td>{task.priority}</td>
                <td>{task.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TasksPanel;
