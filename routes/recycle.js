import express from 'express';
import multer from 'multer';
import Recycle from '../models/Recycle.js';
import User from '../models/User.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Submit recycle form
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('BODY:', req.body);
    console.log('FILE:', req.file);
    const { userId, date, time, quantity, address } = req.body;
    if (!userId || !date || !time || !quantity || !address) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Image file not received' });
    }
    const image = req.file.path;
    const recycle = new Recycle({ userId, image, date, time, quantity, address });
    await recycle.save();
    // Optionally update user points
    await User.findByIdAndUpdate(userId, { $inc: { points: Number(quantity) } });
    res.json({ success: true, recycle });
  } catch (err) {
    console.error('Recycle POST error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
