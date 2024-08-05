import PendingOrder from '../models/pendingOrder.js';
import CompletedOrder from '../models/completedOrder.js';
import mongoose from 'mongoose';

export const placeOrder = async (req, res) => {
    const { buyerQty, buyerPrice, sellerPrice, sellerQty } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const match = await PendingOrder.findOne({
            buyerPrice: sellerPrice,
            sellerPrice: buyerPrice,
        }).session(session);

        if (match) {
            await CompletedOrder.create([{ price: sellerPrice, qty: Math.min(buyerQty, sellerQty) }], { session });
            await PendingOrder.updateOne(
                { _id: match._id },
                { $inc: { buyerQty: -buyerQty, sellerQty: -sellerQty } },
                { session }
            );

            if (match.buyerQty <= 0 || match.sellerQty <= 0) {
                await PendingOrder.deleteOne({ _id: match._id }, { session });
            }
        } else {
            await PendingOrder.create([{ buyerQty, buyerPrice, sellerPrice, sellerQty }], { session });
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
    const pendingOrders = await PendingOrder.find();
    res.json(pendingOrders);
};

export const getCompletedOrders = async (req, res) => {
    const completedOrders = await CompletedOrder.find();
    res.json(completedOrders);
};
