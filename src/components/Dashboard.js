import React, { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Roof Repair",
            details: "Fix leaks and reinforce roof",
            date: "2025-10-10",
        },
        {
            id: 2,
            title: "Elevator Maintenance",
            details: "Safety inspection and servicing",
            date: "2025-10-12",
        },
        {
            id: 3,
            title: "Lobby Renovation",
            details: "Modernize building lobby",
            date: "2025-10-15",
        },
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [newDetails, setNewDetails] = useState("");
    const [newDate, setNewDate] = useState("");

    const addProject = (e) => {
        e.preventDefault();
        if (!newTitle || !newDetails || !newDate) return;
        const newProject = {
            id: projects.length + 1,
            title: newTitle,
            details: newDetails,
            date: newDate,
        };
        setProjects([...projects, newProject]);
        setNewTitle("");
        setNewDetails("");
        setNewDate("");
    };

    return (
        <div className='dashboard-page'>
            <form
                onSubmit={addProject}
                className='add-project-form'>
                <input
                    type='text'
                    placeholder='Project Title'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Project Details'
                    value={newDetails}
                    onChange={(e) => setNewDetails(e.target.value)}
                />
                <input
                    type='date'
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                />
                <button
                    type='submit'
                    className='add-project-button'>
                    Add Project
                </button>
            </form>

            <div className='project-list'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='project-card'>
                        <h3>{project.title}</h3>
                        <p>{project.details}</p>
                        <span>{project.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
