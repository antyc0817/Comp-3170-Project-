import React from "react";

function Navbar({ setPage, currentPage, user, onLogout }) {
    return (
        <nav className='navbar'>
            <h1
                className='app-title'
                onClick={() => setPage("dashboard")}
                style={{ cursor: "pointer" }}>
                Aidile Construction Tracker
            </h1>
            <div className='nav-links'>
                {user ? (
                    <>
                        <span>Welcome, {user.firstName || user.email}</span>
                        <button
                            className={currentPage === "dashboard" ? "active" : ""}
                            onClick={() => setPage("dashboard")}>
                            Dashboard
                        </button>
                        <button
                            className={currentPage === "calendar" ? "active" : ""}
                            onClick={() => setPage("calendar")}>
                            Calendar
                        </button>
                        <button
                            className={currentPage === "notifications" ? "active" : ""}
                            onClick={() => setPage("notifications")}>
                            Notifications
                        </button>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button
                            className={currentPage === "login" ? "active" : ""}
                            onClick={() => setPage("login")}>
                            Login
                        </button>
                        <button
                            className={currentPage === "signup" ? "active" : ""}
                            onClick={() => setPage("signup")}>
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
