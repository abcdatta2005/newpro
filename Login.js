import React, { useState } from "react";
// Predefined users
const users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
];
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      onLogin({ username: foundUser.username });
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow-lg rounded-xl bg-white">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
