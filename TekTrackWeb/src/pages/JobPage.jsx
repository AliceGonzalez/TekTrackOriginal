import React from 'react';
import Navbar from '../components/Navbar';
import JobInfoForm from '../components/CreateJobForm';
import { Box } from '@mui/material';

const JobPage = () => {
  return (
    <Box display="flex">
      <Navbar style={{ width: '250px' }} />
      <Box flexGrow={1} pl={30} pr={80}>
        <JobInfoForm />
      </Box>
    </Box>
  );
};

export default JobPage;

