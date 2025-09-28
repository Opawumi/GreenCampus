
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import RewardPage from './pages/RewardPage';
import RewardSuccessPage from './pages/RewardSuccessPage';
import RewardFailedPage from './pages/RewardFailedPage';
import RecycleBinPage from './pages/RecycleBinPage';
import ChallengePage from './pages/ChallengePage';
import Recycle50PlasticPage from './pages/Recycle50PlasticPage';
import CampusCleanupEventsPage from './pages/CampusCleanupEventsPage';
import Recycle20GallonsPage from './pages/Recycle20GallonsPage';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="/reward" element={<RewardPage />} />
  <Route path="/reward/success" element={<RewardSuccessPage />} />
  <Route path="/reward/failed" element={<RewardFailedPage />} />
  <Route path="/recycle" element={<RecycleBinPage />} />
  <Route path="/challenge" element={<ChallengePage />} />
  <Route path="/challenge/recycle-50-plastic" element={<Recycle50PlasticPage />} />
  <Route path="/challenge/campus-cleanup-events" element={<CampusCleanupEventsPage />} />
  <Route path="/challenge/recycle-20-gallons" element={<Recycle20GallonsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
