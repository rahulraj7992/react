// src/components/Footer.js
import React from "react";
import "../styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                © 2025 Weather App | Designed by{" "}
                <a href="https://sahrahul.netlify.app" target="_blank" rel="noopener noreferrer">
                    Rahul Raj
                </a>
            </p>
        </footer>
    );
};

export default Footer;
