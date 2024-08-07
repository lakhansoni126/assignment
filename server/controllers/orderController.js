import CompletedOrder from '../models/completedOrderModel.js';
import Order from '../models/orderModel.js';
import mongoose from 'mongoose';

export const placeOrder = async (req, res) => {
    const { type, qty, price } = req.body;

    if (!['buy', 'sell'].includes(type)) {
        return res.status(400).send('Invalid order type');
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const matchType = type === 'buy' ? 'sell' : 'buy';

        let remainingQty = qty;
        const ordersToUpdate = [];
        const ordersToDelete = [];

        const matches = await Order.find({
            type: matchType,
            price: type === 'buy' ? { $gte: price } : { $lte: price },
            qty: { $gte: 1 }
        }).sort(type === 'buy' ? { price: -1 } : { price: 1 }).session(session);

        for (const match of matches) {
            if (remainingQty <= 0) break;

            if (match.qty > remainingQty) {
                ordersToUpdate.push({
                    _id: match._id,
                    qty: remainingQty
                });
                remainingQty = 0;
            } else {
                ordersToUpdate.push({
                    _id: match._id,
                    qty: match.qty
                });
                remainingQty -= match.qty;
                ordersToDelete.push(match._id);
            }
        }

        const completedOrders = ordersToUpdate.map(order => ({
            type: matchType,
            price: price,
            qty: order.qty
        }));
        if (completedOrders.length > 0) {
            await CompletedOrder.create(completedOrders, { session });
        }

        for (const order of ordersToUpdate) {
            await Order.updateOne(
                { _id: order._id },
                { $inc: { qty: -order.qty } },
                { session }
            );
        }

        if (ordersToDelete.length > 0) {
            await Order.deleteMany({ _id: { $in: ordersToDelete } }, { session });
        }

        if (remainingQty > 0) {
            await Order.create([{ type, qty: remainingQty, price }], { session });
        }

        await session.commitTransaction();
        session.endSession();

        res.status(200).send('Order processed successfully');
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).send('Error processing order');
    }
};

export const getPendingOrders = async (req, res) => {
    const pendingOrders = await Order.find();
    res.json(pendingOrders);
};

export const getCompletedOrders = async (req, res) => {
    const completedOrders = await CompletedOrder.find();
    res.json(completedOrders);
};
