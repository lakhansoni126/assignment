import express from 'express';
import { placeOrder, getPendingOrders, getCompletedOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/new-order', placeOrder);
router.get('/pending-orders', getPendingOrders);
router.get('/completed-orders', getCompletedOrders);

export default router;
