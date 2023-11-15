import React, {useEffect} from 'react'
import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import MoodTracker from "../components/MoodTracker";
import { useState } from "react";

const UserDashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [loading, setLoading] = useState(false);

    const [component, setComponentActive] = useState(<Dashboard/>);
    

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleSidebar = () => {
        setOpenSidebarToggle((prev) => !prev);
    };

    return (
        <div className="grid-container">
        {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
            <Header sidebarHandler={handleSidebar} />
            <Sidebar componentHandler={setComponentActive} sidebarHandler={handleSidebar} openSidebar={openSidebarToggle} />
                {component}
            </>
        )}
        </div>
    ); 
}

export default UserDashboard