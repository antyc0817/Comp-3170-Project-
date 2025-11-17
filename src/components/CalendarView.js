import React from "react";
import "../styles/CalendarView.css";

function CalendarView({ projects }) {
    const projectList = projects.map(p => ({ date: p.date, title: p.title }));

    const year = 2025;
    const month = 9;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

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
        const dateStr = `${year}-10-${dayStr}`;
        const dayProjects = projectList.filter((p) => p.date === dateStr);
        calendarCells.push(
            <div
                key={dateStr}
                className='calendar-cell'>
                <div className='calendar-day'>{day}</div>
                {dayProjects.map((p, idx) => (
                    <div
                        key={idx}
                        className='calendar-project'>
                        {p.title}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className='calendar-page'>
            <h2>October 2025</h2>
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
