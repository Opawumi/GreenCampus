import React from 'react';
import './RewardPage.css';
import { useNavigate } from 'react-router-dom';

const rewards = [
  { name: 'T-shirt', points: 1100 },
  { name: 'Face Cap', points: 900 },
  { name: 'Cafeteria', points: 750 },
  { name: '#1000 Airtime', points: 600 },
];

const RewardPage = () => {
  const points = 28;
  const username = 'Username.X';
  const navigate = useNavigate();
  const handleRedeem = (rewardPoints) => {
    if (points >= rewardPoints) {
      navigate('/reward/success');
    } else {
      navigate('/reward/failed');
    }
  };
  return (
    <div>
      <div className="reward-bg">
        <div className="reward-card">
          <h2 style={{ color: '#009e2a', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '2rem', textAlign: 'left' }}>GreenCampus</h2>
          <div className="reward-header">
            <div className="reward-profile">
              <span className="reward-avatar">👤</span>
              <span className="reward-username">Hello, <br />{username}</span>
            </div>
            <span className="reward-points">{points}<span>points</span></span>
          </div>
          <div className="reward-banner" style={{ marginBottom: '0.7rem', marginTop: '0.7rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', background: '#2e7d32', color: '#fff' }}>
            <span>Collect <span style={{ color: '#b2ff59', fontWeight: 'bold' }}>green</span> your rewards</span>
          </div>
          <hr style={{ border: 'none', borderTop: '2px solid #2e7d32', margin: '0.7rem 0 1.2rem 0' }} />
          <div className="reward-list">
            {rewards.map((reward, idx) => (
              <div className="reward-item" key={idx}>
                <span>{reward.name}<br /><span style={{ color: '#009e2a', fontWeight: 'bold' }}>{reward.points} points</span></span>
                <button className="reward-redeem-btn" onClick={() => handleRedeem(reward.points)}>Redeem Now</button>
              </div>
            ))}
          </div>
          <button className="reward-back-btn" onClick={() => window.history.back()}>
            &lt; Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardPage;
