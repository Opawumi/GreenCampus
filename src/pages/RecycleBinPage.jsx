import React from 'react';
import './RecycleBinPage.css';

const RecycleBinPage = () => {
  const points = 28;
  return (
    <div>
      <div className="recycle-bg">
        <div className="recycle-card">
          <div className="recycle-header">
            <span style={{ color: '#009e2a', fontWeight: 'bold', fontSize: '2rem' }}>GreenCampus</span>
            <span className="recycle-points">{points}<span>points</span></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
            <span style={{ background: '#2e7d32', color: '#fff', borderRadius: '8px', padding: '0.3rem 0.7rem', fontWeight: 'bold', fontSize: '1rem' }}>You have</span>
            <span style={{ color: '#009e2a', fontWeight: 'bold', fontSize: '1.2rem' }}>{points}<span style={{ color: '#43a047', fontWeight: 'normal', fontSize: '1rem', marginLeft: '2px' }}>points</span></span>
            <span style={{ fontSize: '1.5rem', color: '#009e2a' }}>🔔</span>
          </div>
          <h2 style={{ color: '#009e2a', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '2rem', textAlign: 'left' }}>GreenCampus</h2>
          <div className="recycle-banner" style={{ marginBottom: '0.7rem', marginTop: '0.7rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', background: '#2e7d32', color: '#fff' }}>
            Log your recycle items, grow your <span style={{ color: '#b2ff59', fontWeight: 'bold' }}>green impact!</span>
          </div>
          <form className="recycle-form">
            <input type="file" accept="image/*" placeholder="Upload image of item to be recycled" />
            <input type="text" placeholder="DD/MM/YYYY" />
            <input type="text" placeholder="Time" />
            <input type="text" placeholder="Quantity" />
            <input type="text" placeholder="Insert address of the bin location..." />
            <button type="button" className="qr-scan" style={{ background: 'linear-gradient(90deg, #009e2a 0%, #00e676 100%)', fontWeight: 'bold', fontSize: '1.1rem' }}>Scan QR code<br /><span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>on the bin to submit</span></button>
          </form>
          <div style={{ borderTop: '2px solid #2e7d32', margin: '1.2rem 0 0.7rem 0' }} />
          <div className="recycle-history">
            <span style={{ fontWeight: 'bold' }}>YOUR RECENT HISTORY</span>
            <input type="text" placeholder="DD/MM/YYYY" style={{ marginTop: '0.5rem', width: '100%', border: 'none', background: 'transparent', color: '#333', fontWeight: 'bold', fontSize: '1rem' }} />
            <div style={{ color: '#888', fontWeight: 'bold', fontSize: '1rem' }}>Pending....</div>
          </div>
          <button className="recycle-back-btn" onClick={() => window.history.back()}>
            &lt; Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecycleBinPage;
