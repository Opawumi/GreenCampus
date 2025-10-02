import React, { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import './RecycleBinPage.css';

const RecycleBinPage = () => {
  const [points, setPoints] = useState(0);
  // Hardcoded user ID (replace with actual ID from your DB)
  const userId = '68d935ba4ad827e0e1a5a344';

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${userId}/points`)
      .then(res => res.json())
      .then(data => setPoints(data.points || 0))
      .catch(() => setPoints(0));
  }, []);

  // Form state
  const [form, setForm] = useState({
    image: null,
    date: '',
    time: '',
    quantity: '',
    address: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef(null);

  // Handle form change
  const handleChange = e => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e, scannedAddress) => {
    if (e) e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('image', form.image);
    formData.append('date', form.date);
    formData.append('time', form.time);
    formData.append('quantity', form.quantity);
    formData.append('address', scannedAddress || form.address);
    try {
      const res = await fetch('http://localhost:5000/api/recycles', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('Submitted successfully!');
      } else {
        setSubmitStatus('Submission failed.');
      }
    } catch {
      setSubmitStatus('Submission error.');
    }
    setShowScanner(false);
  };

  // Start QR scanner
  const startScanner = () => {
    setShowScanner(true);
    setTimeout(() => {
      if (scannerRef.current) {
        const html5QrCode = new Html5Qrcode(scannerRef.current.id);
        html5QrCode.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: 250 },
          async qrCodeMessage => {
            setForm(prev => ({ ...prev, address: qrCodeMessage }));
            await handleSubmit(null, qrCodeMessage);
            html5QrCode.stop();
          },
          errorMessage => {
            // Ignore scan errors
          }
        ).catch(err => {
          setSubmitStatus('QR Scan error');
          setShowScanner(false);
        });
      }
    }, 300);
  };

  return (
    <div>
      <div className="recycle-bg">
        <div className="recycle-card">
          <div className="recycle-header">
            
            <span style={{ background: '#2e7d32', color: '#fff', borderRadius: '8px', padding: '0.3rem 0.7rem', fontWeight: 'bold', fontSize: '1rem' }}>You have</span>
            <span className="recycle-points">{points}<span>points</span></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
            <span style={{ color: '#009e2a', fontWeight: 'bold', fontSize: '1.2rem' }}>{points}<span style={{ color: '#43a047', fontWeight: 'normal', fontSize: '1rem', marginLeft: '2px' }}>points</span></span>
            <span style={{ color: '#009e2a', fontWeight: 'bold', fontSize: '2rem' }}>GreenCampus</span>
            <span style={{ fontSize: '1.5rem', color: '#009e2a !important' }}>🔔</span>
          </div>
          {/* <h2 style={{ color: '#009e2a', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '2rem', textAlign: 'left' }}>GreenCampus</h2> */}
          <div className="recycle-banner" style={{ marginBottom: '0.7rem', marginTop: '0.7rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', background: '#2e7d32', color: '#fff' }}>
            Log your recycle items, grow your <span style={{ color: '#b2ff59', fontWeight: 'bold' }}>green impact!</span>
          </div>
          <form className="recycle-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="file" name="image" accept="image/*" onChange={handleChange} required />
            <input type="text" name="date" placeholder="DD/MM/YYYY" value={form.date} onChange={handleChange} required />
            <input type="text" name="time" placeholder="Time" value={form.time} onChange={handleChange} required />
            <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Insert address of the bin location..." value={form.address} onChange={handleChange} required />
            <button type="button" className="qr-scan" style={{ background: 'linear-gradient(90deg, #009e2a 0%, #00e676 100%)', fontWeight: 'bold', fontSize: '1.1rem' }} onClick={startScanner}>
              Scan QR code<br /><span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>on the bin to submit</span>
            </button>
          </form>
          {showScanner && (
            <div style={{ margin: '1rem 0' }}>
              <div id="qr-scanner" ref={scannerRef} style={{ width: '100%', height: '300px', background: '#eee' }} />
              <button onClick={() => setShowScanner(false)}>Cancel</button>
            </div>
          )}
          {submitStatus && <div style={{ color: '#2e7d32', fontWeight: 'bold', marginTop: '0.5rem' }}>{submitStatus}</div>}
          <div style={{ borderTop: '2px solid #2e7d32', margin: '1.2rem 0 0.7rem 0' }} />
          <div className="recycle-history">
            <span style={{ fontWeight: 'bold', color: '#2e7d32' }}>YOUR RECENT HISTORY</span>
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
