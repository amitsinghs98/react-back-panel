import React from "react";
import { useFirebase } from "../context/Firebase";
const TaskLists = () => {
  const { listTaskLists } = useFirebase();
  const [taskLists, setTaskLists] = React.useState([]);

  React.useEffect(() => {
    const fetchTaskLists = async () => {
      try {
        const lists = await listTaskLists();
        setTaskLists(lists);
      } catch (error) {
        console.error("Error fetching task lists:", error);
      }
    };

    fetchTaskLists();
  }, [listTaskLists]);

  return (
    <div>
      <h2>Task Lists</h2>
      <table>
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Created By</th>
            <th>Task Description</th>
            <th>Task Title</th>

            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((taskList, index) => (
            <tr key={index}>
              <td>{taskList.listName}</td>
              <td>{taskList.userEmail}</td>
              <td>
                {taskList.tasks.length > 0 && (
                  <ul>
                    {taskList.tasks.map((task, taskIndex) => (
                      <span key={taskIndex}>
                        <p> {task.description}</p>
                        {/* You can add other fields from the task here */}
                      </span>
                    ))}
                  </ul>
                )}
              </td>
              <td>
                {taskList.tasks.length > 0 && (
                  <ul>
                    {taskList.tasks.map((task, taskIndex) => (
                      <span key={taskIndex}>
                                                <p> {task.title}</p>

                        {/* You can add other fields from the task here */}
                      </span>
                    ))}
                  </ul>
                )}
              </td>
              <td>{formatDateTime(taskList.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const formatDateTime = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JavaScript Date object
  return date.toLocaleString(); // Adjust formatting as per your preference
};
export default TaskLists;
