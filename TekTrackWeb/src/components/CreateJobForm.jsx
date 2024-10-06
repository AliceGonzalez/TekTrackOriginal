import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Input Component
const Input = ({ type, placeholder, id, name, label, required }) => (
    <div style={{ margin: '2px 0' }}>
        <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            style={{
                width: '100%',
                padding: '2px',
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

// Main CreateJobForm Component
const CreateJobForm = () => {
    const navigate = useNavigate(); // Correctly define navigate here

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = {
            company: e.target.company.value,
            jobTitle: e.target.job_title.value,
            jobUrlLink: e.target.job_link.value,
            jobDesc: e.target.job_desc.value,
            dateApplied: e.target.date.value,
            contactName: e.target.contact_name.value,
            contactEmail: e.target.contact_email.value,
            contactNumber: e.target.contact_phoneNumber.value,
            referral: e.target.referral.value,
            remote: e.target.remote.checked,
            gotResponse: e.target.got_response.checked,
        };

        try {
            const response = await fetch('/jobs/new_job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Job saved:', data);
                navigate('/jobs'); // Navigate to jobs page after successful submission
            } else {
                console.error('Error saving job:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{
            maxWidth: '60%',
            height: '80%',
            margin: '50px auto',
            padding: '15px',
            backgroundColor: '#f8f8f8',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Job</h2>
            <form onSubmit={handleLogin}> {/* Use handleLogin here */}
                <Input type="text" placeholder="Company" id="company" name="company" label="Job Section" required />
                <Input type="text" placeholder="Position" id="job_title" name="job_title" required />
                <Input type="text" placeholder="Link" id="job_link" name="job_link" required />
                <Input type="text" placeholder="Description" id="job_desc" name="job_desc" required />
                <Input type="date" id="date" name="date" label="Date Applied" required />
                <Input type="text" placeholder="Name" id="contact_name" name="contact_name" label="Point of Contact" required />
                <Input type="text" placeholder="Email" id="contact_email" name="contact_email" label="" required />
                <Input type="text" placeholder="Phone Number" id="contact_phoneNumber" name="contact_phoneNumber" required />
                <Input type="text" placeholder="Referral" id="referral" name="referral" required />
                <Checkbox id="remote" name="remote" label="Remote" />
                <Checkbox id="got_response" name="got_response" label="Got Response" />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default CreateJobForm;