import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import orderRoutes from './routes/orderRoutes.js';

connectDB();

const app = express();

app.use(cors({
    origin: 'https://assignment-frontend-blush.vercel.app',
    methods: 'GET,POST',
    credentials: false
}));

app.use(express.json());

app.use('/api/v1/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
