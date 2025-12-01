import React, { useState } from "react";
import "../styles/Dashboard.css";
import AddProjectModal from "./AddProjectModal";
import Toast from "./Toast";

function Dashboard({ projects, setProjects, onViewDetails }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectToEdit, setProjectToEdit] = useState(null);
    const [toast, setToast] = useState({
        isVisible: false,
        message: "",
        type: "success",
    });

    const showToast = (message, type = "success") => {
        setToast({ isVisible: true, message, type });
    };

    const hideToast = () => {
        setToast({ ...toast, isVisible: false });
    };

    const handleAddProject = (newProject) => {
        if (projectToEdit) {
            setProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project.id === projectToEdit.id
                        ? { ...newProject, selected: false }
                        : project
                )
            );
            setProjectToEdit(null);
            showToast("Project updated successfully!", "success");
        } else {
            setProjects([...projects, { ...newProject, selected: false }]);
            showToast("Project saved successfully!", "success");
        }
    };

    const handleEditProject = () => {
        const selected = projects.find((project) => project.selected);
        if (selected) {
            setProjectToEdit(selected);
            setIsModalOpen(true);
        }
    };

    const handleSelectProject = (id) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id
                    ? { ...project, selected: !project.selected }
                    : { ...project, selected: false }
            )
        );
    };

    const handleDeleteProject = () => {
        setProjects((prevProjects) =>
            prevProjects.filter((project) => !project.selected)
        );
        showToast("Project deleted successfully!", "success");
    };

    const selectedProject = projects.find((project) => project.selected);

    return (
        <div className='dashboard-page'>
            <div className='dashboard-controls'>
                <button
                    className='add-project-button'
                    onClick={() => {
                        setProjectToEdit(null);
                        setIsModalOpen(true);
                    }}>
                    + Add Project
                </button>
                {selectedProject && (
                    <>
                        <button
                            className='edit-project-button'
                            onClick={handleEditProject}>
                            Edit Project
                        </button>
                        <button
                            className='delete-project-button'
                            onClick={handleDeleteProject}>
                            Delete Project
                        </button>
                    </>
                )}
            </div>

            <div className='project-list'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${
                            project.selected ? "selected" : ""
                        }`}
                        onClick={() => handleSelectProject(project.id)}>
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.details}</p>
                            <span>{project.date}</span>
                        </div>
                        <button
                            className='view-detail-button'
                            onClick={(e) => {
                                e.stopPropagation();
                                onViewDetails(project.id);
                            }}>
                            View Detail
                        </button>
                    </div>
                ))}
            </div>

            <AddProjectModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setProjectToEdit(null);
                }}
                onAddProject={handleAddProject}
                projectToEdit={projectToEdit}
            />

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
        </div>
    );
}

export default Dashboard;
