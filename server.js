import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';
import recycleRoutes from './routes/recycle.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/recycles', recycleRoutes);

mongoose.connect('mongodb://localhost:27017/greencampus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
  res.send('GreenCampus Backend is running!');
});

app.use('/api/users', userRoutes);
app.use('/api/recycles', recycleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
