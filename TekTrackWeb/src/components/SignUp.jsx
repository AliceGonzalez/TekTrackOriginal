import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Input Component
const Input = ({ type, id, name, placeholder, required, onChange }) => (
    <div style={{ margin: '8px 0' }}>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            style={{
                width: '93%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
        />
    </div>
);

// Reusable Button Component
const Button = ({ type, children }) => (
    <button
        type={type}
        style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#9ee493',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
        }}
    >
        {children}
    </button>
);

// Reusable Link Component
const Link = ({ href, children }) => (
    <a href={href} style={{ color: '#007bff', textDecoration: 'none' }}>{children}</a>
);

// Main SignUp Component
const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        const userData = { username, password, email, firstName, lastName };

        try {
            const response = await fetch('/api/auth/sign-up', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const createdUser = await response.json();
                console.log('User created:', createdUser);
                navigate('/jobs');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'SignUp Failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    }

    return (
        <div style={{
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            backgroundColor: '#f8f8f8',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSignUp}>
                <Input type="text" id="username" name="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" id="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
                <Input type="text" id="firstName" name="firstName" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
                <Input type="text" id="lastName" name="lastName" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                <Input type="email" id="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <Button id='createAccount' type="submit">Create Account</Button>
            </form>
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <p>Already have an account? <Link href="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;