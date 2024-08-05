import mongoose from 'mongoose';

const completedOrderSchema = new mongoose.Schema({
    price: Number,
    qty: Number,
});

const CompletedOrder = mongoose.model('CompletedOrder', completedOrderSchema);
export default CompletedOrder;
