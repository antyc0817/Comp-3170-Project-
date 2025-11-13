import React from "react";
import "../styles/ProjectDetails.css";

function ProjectDetails({ project, onClose }) {
    return (
        <div className='project-details-overlay'>
            <div className='project-details-container'>
                <div className='project-details-content'>
                    <div className='project-details-main'>
                        <div className='project-details-info'>
                            <h1 className='project-details-title'>{project.title}</h1>

                            <div className='project-details-field'>
                                <span className='project-details-label'>Details:</span>
                                <span className='project-details-value'>
                                    {project.details || ""}
                                </span>
                            </div>

                            <div className='project-details-field'>
                                <span className='project-details-label'>Date:</span>
                                <span className='project-details-value'>
                                    {project.date || ""}
                                </span>
                            </div>

                            <div className='project-details-field'>
                                <span className='project-details-label'>What:</span>
                                <span className='project-details-value'>
                                    {project.what || ""}
                                </span>
                            </div>

                            <div className='project-details-field'>
                                <span className='project-details-label'>Why:</span>
                                <span className='project-details-value'>
                                    {project.why || ""}
                                </span>
                            </div>

                            <div className='project-details-field'>
                                <span className='project-details-label'>Deadline:</span>
                                <span className='project-details-value'>
                                    {project.deadline || ""}
                                </span>
                            </div>

                            <div className='project-details-field'>
                                <span className='project-details-label'>Where:</span>
                                <span className='project-details-value'>
                                    {project.where || ""}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className='back-to-dashboard-button'
                    onClick={onClose}>
                    ← Back to Dashboard
                </button>
            </div>
        </div>
    );
}

export default ProjectDetails;
