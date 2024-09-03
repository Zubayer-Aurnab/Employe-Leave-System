import React from 'react';
import '../NavBar/Nav.css'

const Button = ({ title, large, fullWidth, }) => {
    return (
        <button className={`text-lg font-medium px-5 ${large ? "py-3 rounded-md" : "py-1"} nav-btn font-Roboto ${fullWidth ? "w-1/2" : ""}`}>{title}</button>
    );
};

export default Button;