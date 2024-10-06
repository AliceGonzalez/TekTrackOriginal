import React from 'react';
// import Login from '../components/LogIn';
import SignUp from '../components/SignUp';
import LogoHome from '../assets/images/finding-job.jpg'; // Adjust the path as needed
import Logo from '../assets/images/BlackLogo.png';
import Footer from '../components/Footer';

// Reusable Image Component
const ImageComponent = ({ src, alt, width, maxWidth }) => (
  <div style={{
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      marginBottom: '0px', // Space between images
      marginTop: '0px',
      paddingTop: '20px',
  }}>
      <img src={src} alt={alt} style={{ 
        width: width || '100%',
        maxWidth: maxWidth || '100%', 
        height: 'auto' }} />
  </div>
);

// Main HomePage Component
const HomePage = () => {
    return (
        <div style={{
            display: 'flex', // Use flexbox for layout
            height: '100vh', // Full viewport height
        }}>
            {/* Container for stacked images */}
            <div style={{
                display: 'flex',
                flexDirection: 'column', // Stack images vertically
                flex: '1', // Take up available space
                justifyContent: 'center', // Center images vertically in the column
                alignItems: 'center', // Center images horizontally
            }}>
                <ImageComponent src={Logo} alt="Logo" width="150%" maxWidth="200px" />
                
                {/* Paragraph between the images */}
                <p style={{
                    textAlign: 'center', // Center text
                    margin: '10px 0', // Space above and below the paragraph
                    fontSize: '16px', // Adjust font size as needed
                    color: '#333', // Adjust text color if needed
                }}>
                    Welcome to TekTrack! Designed to manage multiple tech applications for jobs, internships, and interviews. Our tool helps you organize and streamline your application process, keeping all your information in one place. Say goodbye to the chaos and focus on what truly matters—landing your dream opportunity!
                </p>
                
                <ImageComponent src={LogoHome} alt="Finding Job" width="300%" maxWidth="600px"/>
            </div>

            {/* Login Component */}
            <div style={{
                flex: '1', // Take up available space for login
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                boxSizing: 'border-box', // Ensure padding doesn't affect overall width
                // backgroundColor: '#DAf7dc'
            }}>
                <SignUp />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
