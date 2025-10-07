import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";
import Notifications from "./components/Notifications";
import ProjectDetails from "./components/ProjectDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./styles/main.css";

function App() {
    // State to control which page is currently visible
    const [page, setPage] = useState("dashboard");

    return (
        <div className='app-container'>
            {/* Navbar stays on top and changes the page */}
            <Navbar
                setPage={setPage}
                currentPage={page}
            />

            {/* Main content area */}
            <main className='content'>
                {page === "dashboard" && <Dashboard />}
                {page === "calendar" && <CalendarView />}
                {page === "notifications" && <Notifications />}
                {page === "projectDetails" && <ProjectDetails />}
                {page === "login" && <Login />}
                {page === "signup" && <SignUp />}
            </main>
        </div>
    );
}

export default App;
