import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ refreshOrders }) => {
    const [form, setForm] = useState({ qty: '', price: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://backend-liart-theta.vercel.app/api/v1/orders/new-order', form);
        refreshOrders();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-md shadow-md space-y-4">
            <div>
                <input
                    type="number"
                    name="qty"
                    placeholder="Quantity"
                    value={form.qty}
                    onChange={(e) => setForm({ ...form, qty: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                    onWheel={(e) => e.target.blur()}
                />
            </div>
            <div>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                    onWheel={(e) => e.target.blur()}
                />
            </div>
            <div>
                <select
                    name="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                >
                    <option value="" disabled>Select type</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
                Place Order
            </button>
        </form>
    );
};

export default OrderForm;
