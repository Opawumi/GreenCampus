import React from 'react';
import './CampusCleanupEventsPage.css';

const CampusCleanupEventsPage = () => (
  <div className="challenge-detail-bg">
    <div className="challenge-detail-card">
      <h2 className="challenge-detail-title">GreenCampus</h2>
      <div className="challenge-detail-box">
        <div className="challenge-detail-icon" style={{ background: '#009e2a' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#009e2a"/><path d="M24 16l8 8-8 8-8-8 8-8z" fill="#fff"/></svg>
        </div>
        <h3 style={{ fontWeight: 'bold', color: '#009e2a', fontSize: '1.5rem' }}>Attend 5 Campus Cleanup Event</h3>
        <p style={{ color: '#333', fontWeight: '500' }}>Unity Park<br />Saturday, 10AM - 1PM</p>
        <div className="challenge-detail-info">
          <span>🏆 100pts</span>
        </div>
        <div style={{ margin: '1rem 0', color: '#333', fontWeight: '500' }}> <button>Submit photo after event</button></div>
        <button className="challenge-detail-claim">Collect reward</button>
        <div style={{ color: '#333', fontWeight: '500', fontSize: '0.95rem', marginTop: '1rem' }}>Check your dashboard to confirm reward</div>
      </div>
      <button className="challenge-detail-back" onClick={() => window.history.back()}>&lt; Back</button>
    </div>
  </div>
);

export default CampusCleanupEventsPage;
