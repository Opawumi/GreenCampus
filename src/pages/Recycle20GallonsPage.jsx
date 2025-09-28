import React from 'react';
import './Recycle20GallonsPage.css';

const Recycle20GallonsPage = () => (
  <div className="challenge-detail-bg">
    <div className="challenge-detail-card">
      <h2 className="challenge-detail-title">GreenCampus</h2>
      <div className="challenge-detail-box">
        <div className="challenge-detail-icon" style={{ background: '#009e2a' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#009e2a"/><path d="M24 16l8 8-8 8-8-8 8-8z" fill="#fff"/></svg>
        </div>
        <h3 style={{ fontWeight: 'bold', color: '#009e2a', fontSize: '1.5rem' }}>Recycle 20 Gallons of Plastic</h3>
        <p style={{ color: '#333', fontWeight: '500' }}>Submit 20 recyclable gallons</p>
        <div className="challenge-detail-info">
          <span>🏆 50pts</span>
        </div>
        <button className="challenge-detail-upload">Upload Photo</button>
        <div style={{ margin: '1rem 0', color: '#333', fontWeight: '500' }}>Item count <input type="number" min="0" value={20} style={{ width: '60px', marginLeft: '0.5rem', borderRadius: '6px', border: '1px solid #009e2a', padding: '0.2rem 0.5rem' }} readOnly /></div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
          <button className="challenge-detail-action" >Recycle Gallons</button>
          <button className="challenge-detail-claim">Collect reward</button>
        </div>
        <div style={{ color: '#333', fontWeight: '500', fontSize: '0.95rem', marginTop: '1rem' }}>Check your dashboard to confirm reward</div>
      </div>
      <button className="challenge-detail-back" onClick={() => window.history.back()}>&lt; Back</button>
    </div>
  </div>
);

export default Recycle20GallonsPage;
