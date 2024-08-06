import mongoose from 'mongoose';

const completedOrderSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['buy', 'sell'],
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const CompletedOrder = mongoose.model('CompletedOrder', completedOrderSchema);
export default CompletedOrder;
