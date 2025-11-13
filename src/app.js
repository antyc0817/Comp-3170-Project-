import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";
import Notifications from "./components/Notifications";
import ProjectDetails from "./components/ProjectDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./styles/main.css";

function App() {
    const [page, setPage] = useState("dashboard");
    const [selectedProject, setSelectedProject] = useState(null);
    
    const defaultProjects = [
        {
            id: 1,
            title: "Roof Repair",
            details: "Fix leaks and reinforce roof",
            date: "2025-10-10",
            selected: false,
            what: "Fix leaks and reinforce the roof structure",
            why: "Prevent water damage and maintain building safety",
            deadline: "2025-10-10",
            where: "Building rooftop",
        },
        {
            id: 2,
            title: "Elevator Maintenance",
            details: "Safety inspection and servicing",
            date: "2025-10-12",
            selected: false,
            what: "Safety inspection and servicing of elevator systems",
            why: "Ensure passenger safety and comply with regulations",
            deadline: "2025-10-12",
            where: "Main elevator shaft",
        },
        {
            id: 3,
            title: "Lobby Renovation",
            details: "Modernize building lobby",
            date: "2025-10-15",
            selected: false,
            what: "Modernize building lobby with new fixtures",
            why: "Improve building aesthetics and tenant satisfaction",
            deadline: "2025-10-15",
            where: "Building lobby",
        },
    ];

    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem("projects");
        if (savedProjects) {
            try {
                return JSON.parse(savedProjects);
            } catch (e) {
                return defaultProjects;
            }
        }
        return defaultProjects;
    });

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

    const handleViewProjectDetails = (projectId) => {
        const project = projects.find((p) => p.id === projectId);
        if (project) {
            setSelectedProject(project);
            setPage("projectDetails");
        }
    };

    const handleCloseProjectDetails = () => {
        setSelectedProject(null);
        setPage("dashboard");
    };

    return (
        <div className='app-container'>
            <Navbar
                setPage={setPage}
                currentPage={page}
            />
            <main className='content'>
                {page === "dashboard" && (
                    <Dashboard
                        projects={projects}
                        setProjects={setProjects}
                        onViewDetails={handleViewProjectDetails}
                    />
                )}
                {page === "calendar" && <CalendarView />}
                {page === "notifications" && <Notifications />}
                {page === "projectDetails" && selectedProject && (
                    <ProjectDetails
                        project={selectedProject}
                        onClose={handleCloseProjectDetails}
                    />
                )}
                {page === "login" && <Login />}
                {page === "signup" && <SignUp />}
            </main>
        </div>
    );
}

export default App;
