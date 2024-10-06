import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/jobs'); // Adjust the URL as needed
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Jobs</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li> // Adjust according to your JobInfo structure
                ))}
            </ul>
        </div>
    );
};

export default JobsPage;