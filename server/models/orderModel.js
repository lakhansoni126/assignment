import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
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

const Order = mongoose.model('Order', orderSchema);
export default Order;
