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
        <div>
          {tasksData.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.listName}</h3>
              <ul>
                {todo.tasks.map((task, index) => (
                  <li key={index}>
                    <h4>{task.title}</h4>
                    <p>Description: {task.description}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Date: {task.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksPanel;
