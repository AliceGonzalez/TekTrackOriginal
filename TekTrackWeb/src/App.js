import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { PAGES } from './constants/constants';


const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<PAGES.HomePage />} />  
        <Route path="/jobs" element={<PAGES.JobPage />} />
        <Route path="/internship" element={<PAGES.InternshipPage />} />
        <Route path="/interview" element={<PAGES.InterviewPage />} />
        <Route path="/faq" element={<PAGES.FaqPage />} />
        <Route path="/blog" element={<PAGES.BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;