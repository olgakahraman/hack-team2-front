import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import './App.css'
import VolunteersPage from './pages/VolunteersPage'
import OrganizationsPage from './pages/OrganizationsPage'

function App() {
 

  return (
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/VolunteersPage" element={<VolunteersPage />} />
          <Route path="/OrganizationsPage" element={<OrganizationsPage />} />
        </Routes>
      </Router>
  );
}

export default App
