import React, { useEffect } from "react";
import "../styles/Toast.css";

function Toast({ message, type, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast toast-${type}`}>
            <span className='toast-message'>{message}</span>
            <button
                className='toast-close'
                onClick={onClose}>
                ×
            </button>
        </div>
    );
}

export default Toast;

