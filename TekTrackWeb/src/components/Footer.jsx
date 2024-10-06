// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f8f8f8', // Light background color
            padding: '10px 20px', // Padding for spacing
            textAlign: 'center', // Center the text
            position: 'fixed', // Position it at the bottom
            bottom: 0,
            left: 0,
            right: 0, // Stretch across the entire width
        }}>
            <p style={{
                margin: '0', // Remove default margin
                fontSize: '14px', // Font size
                color: '#333', // Text color
            }}>
                © {new Date().getFullYear()} TekCodes. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
