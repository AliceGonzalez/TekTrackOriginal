import React from 'react';

const HeaderWave = () => {
    return (
        <header style={headerStyle}>
            <div style={waveStyle}></div>
            <h1 style={headerTitleStyle}>Welcome to TekTrack</h1>
        </header>
    );
};

const headerStyle = {
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    overflow: 'hidden', // Hide overflow to keep the wave within the header
};

const headerTitleStyle = {
    position: 'relative',
    zIndex: 1, // Ensure the title is above the wave
    fontSize: '2.5rem',
    color: '#333',
};

const waveStyle = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '200%', // Make the wave wider than the header
    height: '100px', // Height of the wave
    background: `url('path_to_wave_image.svg') repeat-x`, // Use a wave image
    backgroundSize: '50% auto', // Adjust the size of the wave
    animation: 'wave-animation 5s linear infinite', // Animation for the wave
    transform: 'translateX(-50%)', // Center the wave
};

// Keyframes for wave animation
const waveAnimation = `
@keyframes wave-animation {
    0% {
        background-position: 0 0; // Start position
    }
    100% {
        background-position: 100% 0; // End position
    }
}`;

// Append the keyframes to the document's style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(waveAnimation, styleSheet.cssRules.length);

export default HeaderWave;