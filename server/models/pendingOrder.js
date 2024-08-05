import mongoose from 'mongoose';

const pendingOrderSchema = new mongoose.Schema({
    buyerQty: Number,
    buyerPrice: Number,
    sellerPrice: Number,
    sellerQty: Number,
});

const PendingOrder = mongoose.model('PendingOrder', pendingOrderSchema);
export default PendingOrder;
