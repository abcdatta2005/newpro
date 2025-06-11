import React from "react";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
      <button
        onClick={onLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
