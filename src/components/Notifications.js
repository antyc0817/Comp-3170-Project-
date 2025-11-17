import React from "react";
import "../styles/Notifications.css";

function Notifications({ projects }) {
    const notifications = projects.map(project => ({
        message: `${project.title} scheduled for ${project.date}`
    }));

    return (
        <div className='notifications-page'>
            <h2>Notifications</h2>
            <div className='notifications-list'>
                {notifications.map((note, index) => (
                    <div
                        key={index}
                        className='notification-card'>
                        {note.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notifications;
