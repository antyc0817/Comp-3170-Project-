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
    const [page, setPage] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? "dashboard" : "login";
    });
    const [selectedProject, setSelectedProject] = useState(null);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const handleLogin = (userData) => {
        setUser(userData);
        setPage("dashboard");
    };

    const handleLogout = () => {
        setUser(null);
        setPage("login");
    };

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

    if (!user && (page !== "login" && page !== "signup")) {
        setPage("login");
        return null;
    }

    return (
        <div className='app-container'>
            <Navbar
                setPage={setPage}
                currentPage={page}
                user={user}
                onLogout={handleLogout}
            />
            <main className='content'>
                {page === "dashboard" && user && (
                    <Dashboard
                        projects={projects}
                        setProjects={setProjects}
                        onViewDetails={handleViewProjectDetails}
                    />
                )}
                {page === "calendar" && user && <CalendarView projects={projects} />}
                {page === "notifications" && user && <Notifications projects={projects} />}
                {page === "projectDetails" && selectedProject && (
                    <ProjectDetails
                        project={selectedProject}
                        onClose={handleCloseProjectDetails}
                    />
                )}
                {page === "login" && <Login onLogin={handleLogin} onSwitchToSignUp={() => setPage("signup")} />}
                {page === "signup" && <SignUp onSignUp={handleLogin} onSwitchToLogin={() => setPage("login")} />}
            </main>
        </div>
    );
}

export default App;
