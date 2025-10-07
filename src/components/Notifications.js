import React from "react";

function Notifications() {
    const notifications = [
        { message: "Roof Repair scheduled for 2025-10-10" },
        { message: "Elevator Maintenance scheduled for 2025-10-12" },
        { message: "Lobby Renovation scheduled for 2025-10-15" },
    ];

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((note, index) => (
                    <li key={index}>{note.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
