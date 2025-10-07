import React from "react";
import "../styles/Notifications.css";

function Notifications() {
    const notifications = [
        { message: "Roof Repair scheduled for 2025-10-10" },
        { message: "Elevator Maintenance scheduled for 2025-10-12" },
        { message: "Lobby Renovation scheduled for 2025-10-15" },
    ];

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
