import React, { useState, useEffect } from "react";
import "../styles/AddProjectModal.css";

const AddProjectModal = ({ isOpen, onClose, onAddProject, projectToEdit }) => {
    if (!isOpen) return null;

    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [date, setDate] = useState("");
    const [what, setWhat] = useState("");
    const [why, setWhy] = useState("");
    const [deadline, setDeadline] = useState("");
    const [where, setWhere] = useState("");
    const [colorTag, setColorTag] = useState("#1a73e8");

    useEffect(() => {
        if (projectToEdit) {
            setTitle(projectToEdit.title || "");
            setDetail(projectToEdit.details || "");
            setDate(projectToEdit.date || "");
            setWhat(projectToEdit.what || "");
            setWhy(projectToEdit.why || "");
            setDeadline(projectToEdit.deadline || "");
            setWhere(projectToEdit.where || "");
            setColorTag(projectToEdit.colorTag || "#1a73e8");
        } else {
            setTitle("");
            setDetail("");
            setDate("");
            setWhat("");
            setWhy("");
            setDeadline("");
            setWhere("");
            setColorTag("#1a73e8");
            setWhere("");
            setColorTag("#1a73e8");
        }
    }, [projectToEdit, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Title is required.");
            return;
        }

        const newProject = {
            id: projectToEdit ? projectToEdit.id : Date.now(),
            title: title.trim(),
            details: detail.trim() || "",
            date: date || "",
            what: what.trim() || "",
            why: why.trim() || "",
            deadline: deadline || "",
            where: where.trim() || "",
            colorTag: colorTag || "#1a73e8",
        };

        onAddProject(newProject);
        setTitle("");
        setDetail("");
        setDate("");
        setWhat("");
        setWhy("");
        setDeadline("");
        setWhere("");
        setColorTag("#1a73e8");
        onClose();
    };

    const handleClose = () => {
        setTitle("");
        setDetail("");
        setDate("");
        setWhat("");
        setWhy("");
        setDeadline("");
        setWhere("");
        onClose();
    };

    return (
        <div
            className='modal-overlay'
            onClick={handleClose}>
            <div
                className='modal-wrapper'
                onClick={(e) => e.stopPropagation()}>
                <div className='modal-content'>
                    <button
                        className='close-button'
                        onClick={handleClose}>
                        ✖
                    </button>
                    <h2>Enter the project information</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <input
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Project Title'
                            />
                        </div>
                        <div>
                            <label>Detail:</label>
                            <input
                                type='text'
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder='Project Details'
                            />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input
                                type='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>What:</label>
                            <input
                                type='text'
                                value={what}
                                onChange={(e) => setWhat(e.target.value)}
                                placeholder='What needs to be done'
                            />
                        </div>
                        <div>
                            <label>Why:</label>
                            <input
                                type='text'
                                value={why}
                                onChange={(e) => setWhy(e.target.value)}
                                placeholder='Why is this project needed'
                            />
                        </div>
                        <div>
                            <label>Deadline:</label>
                            <input
                                type='date'
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Where:</label>
                            <input
                                type='text'
                                value={where}
                                onChange={(e) => setWhere(e.target.value)}
                                placeholder='Where will this take place'
                            />
                        </div>
                        <div>
                            <label>Color Tag:</label>
                            <select
                                value={colorTag}
                                onChange={(e) => setColorTag(e.target.value)}>
                                <option value='#1a73e8'>Blue</option>
                                <option value='#43a047'>Green</option>
                                <option value='#fb8c00'>Orange</option>
                                <option value='#e53935'>Red</option>
                                <option value='#8e24aa'>Purple</option>
                                <option value='#455a64'>Slate</option>
                            </select>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProjectModal;
