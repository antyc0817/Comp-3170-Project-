import React from "react";

function ProjectDetails() {
    const project = {
        title: "Roof Repair",
        what: "Fix leaks and reinforce the roof structure",
        why: "Prevent water damage and maintain building safety",
        when: "2025-10-10",
    };

    return (
        <div>
            <h2>Project Details</h2>
            <p>
                <strong>Title:</strong> {project.title}
            </p>
            <p>
                <strong>What:</strong> {project.what}
            </p>
            <p>
                <strong>Why:</strong> {project.why}
            </p>
            <p>
                <strong>When:</strong> {project.when}
            </p>
        </div>
    );
}

export default ProjectDetails;
