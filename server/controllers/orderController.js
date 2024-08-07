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

        // Find a matching order
        const match = await Order.findOne({
            type: matchType,
            price: type === 'buy' ? { $gte: price } : { $lte: price },
            qty: { $gte: qty },
        }).session(session);

        if (match) {
            // Create a completed order
            await CompletedOrder.create([{ type: matchType, price: match.price, qty: Math.min(qty, match.qty) }], { session });

            // Update or remove the matching order
            if (match.qty > qty) {
                await Order.updateOne(
                    { _id: match._id },
                    { $inc: { qty: -qty } },
                    { session }
                );
            } else {
                await Order.deleteOne({ _id: match._id }, { session });
            }
        } else {
            // No match found, create a new order
            await Order.create([{ type, qty, price }], { session });
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
