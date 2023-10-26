import React from 'react'
import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import { useState } from "react";


const UserDashboard = () => {
 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleSidebar = () => {
    setOpenSidebarToggle((prev) => !prev);
  };

  return (
    <div className="grid-container">
      <Header sidebarHandler={handleSidebar} />
      <Sidebar sidebarHandler={handleSidebar} openSidebar={openSidebarToggle} />
      <Dashboard />
    </div>
  );
 
}

export default UserDashboard
