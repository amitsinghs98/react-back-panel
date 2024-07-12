import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Adjust the path based on your project structure

const UsersPanel = () => {
  const { listUsers } = useFirebase(); // Ensure listUsers is imported correctly

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await listUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, [listUsers]); // Add listUsers to the dependency array

  return (
    <div className="panel">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Signup Time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userEmail}</td>
              <td>{user.createdAt.toDate().toLocaleString()}</td>
              <td>{user.userIp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPanel;
