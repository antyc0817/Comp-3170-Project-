import React from "react";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
    const project = {
        title: "Roof Repair",
        what: "Fix leaks and reinforce the roof structure",
        why: "Prevent water damage and maintain building safety",
        when: "2025-10-10",
    };

    return (
        <div className='project-details-page'>
            <h2>Project Details</h2>
            <div className='project-details-card'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-what'>
                    <strong>What:</strong> {project.what}
                </p>
                <p className='project-why'>
                    <strong>Why:</strong> {project.why}
                </p>
                <p className='project-when'>
                    <strong>When:</strong> {project.when}
                </p>
            </div>
        </div>
    );
}

export default ProjectDetails;
