import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Input Component
const Input = ({ type, id, name, label, required }) => (
    <div style={{ margin: '8px 0' }}>
        <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
        <input
            type={type}
            id={id}
            name={name}
            required={required}
            style={{
                width: '93%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
        />
    </div>
);

// Reusable Checkbox Component
const Checkbox = ({ id, name, label }) => (
    <div style={{ margin: '10px 0' }}>
        <input type="checkbox" id={id} name={name} />
        <label htmlFor={id} style={{ marginLeft: '5px' }}>{label}</label>
    </div>
);

// Reusable Button Component
const Button = ({ type, children, onClick }) => (
    <button
        type={type}
        onClick={onClick}
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

// Main Login Component
const Login = () => {
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        navigate('/jobs');
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
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
            <form onSubmit={handleLogIn}>
                <Input type="text" placeholder="Username" id="username" name="username" label="Username" required />
                <Input type="password" placeholder="Password" id="password" name="password" label="Password" required />
                <Checkbox id="rememberMe" name="rememberMe" label="Remember Me" />
                <div>
                    <Link href="/forgot-password">Forgot Password?</Link>
                </div>
                <Button type="submit">Login</Button>
            </form>
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <p>Don't have an account? <Link href="/signup">Create one</Link></p>
            </div>
        </div>
    );
};

export default Login;
