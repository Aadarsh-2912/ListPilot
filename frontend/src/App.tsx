import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Uncomment when available

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to login page by default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes (Add logic later if needed) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 Fallback */}
        <Route path="*" element={<div className="text-center text-red-500 mt-10">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
