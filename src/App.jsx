
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RewardPage from './pages/RewardPage';
import RecycleBinPage from './pages/RecycleBinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/recycle" element={<RecycleBinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
