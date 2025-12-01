import React, { useState } from "react";
import "../styles/CalendarView.css";

function CalendarView({ projects }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    const calendarCells = [];
    for (let i = 0; i < firstDay; i++) {
        calendarCells.push(
            <div
                key={"empty-" + i}
                className='calendar-cell empty'></div>
        );
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayStr = day.toString().padStart(2, "0");
        const monthStr = (month + 1).toString().padStart(2, "0");
        const dateStr = `${year}-${monthStr}-${dayStr}`;

        const isToday = year === todayYear && month === todayMonth && day === todayDate;

        const dayProjects = projects.filter((p) => {
            if (!p.date) return false;
            const projectDate = new Date(p.date);
            return (
                projectDate.getFullYear() === year &&
                projectDate.getMonth() === month &&
                projectDate.getDate() === day
            );
        });

        calendarCells.push(
            <div
                key={dateStr}
                className={`calendar-cell ${isToday ? "today" : ""}`}>
                <div className='calendar-day'>{day}</div>
                {dayProjects.map((p, idx) => (
                    <div
                        key={p.id || idx}
                        className='calendar-project'
                        title={p.title}>
                        {p.title}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className='calendar-page'>
            <div className='calendar-controls'>
                <button
                    className='calendar-nav-button'
                    onClick={goToPreviousMonth}>
                    ← Previous
                </button>
                <h2>
                    {monthNames[month]} {year}
                </h2>
                <button
                    className='calendar-nav-button'
                    onClick={goToNextMonth}>
                    Next →
                </button>
            </div>
            <button
                className='calendar-today-button'
                onClick={goToToday}>
                Today
            </button>
            <div className='calendar-grid'>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div
                        key={d}
                        className='calendar-header'>
                        {d}
                    </div>
                ))}
                {calendarCells}
            </div>
        </div>
    );
}

export default CalendarView;
