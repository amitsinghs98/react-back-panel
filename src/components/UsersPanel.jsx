// src/components/UsersPanel.js
import React from "react";

const UsersPanel = () => {
  // Simulated data for users
  const usersData = [
    {
      email: "amit@gmail.com",
      password: "password1",
      signupTime: "2024-01-01",
      ip: "192.168.0.1",
    },
    {
      email: "manit@gmail.com",
      password: "password2",
      signupTime: "2024-01-02",
      ip: "192.168.0.2",
    },
  ];

  return (
    <div className="panel">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Password</th>
            <th>Signup Time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.signupTime}</td>
              <td>{user.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPanel;
