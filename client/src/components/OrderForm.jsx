import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ refreshOrders }) => {
    const [form, setForm] = useState({ buyerQty: '', buyerPrice: '', sellerPrice: '', sellerQty: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/v1/orders/new-order', form);
        refreshOrders();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-md shadow-md space-y-4">
            <div>
                <input
                    type="number"
                    name="buyerQty"
                    placeholder="Buyer Quantity"
                    value={form.buyerQty}
                    onChange={(e) => setForm({ ...form, buyerQty: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                />
            </div>
            <div>
                <input
                    type="number"
                    name="buyerPrice"
                    placeholder="Buyer Price"
                    value={form.buyerPrice}
                    onChange={(e) => setForm({ ...form, buyerPrice: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                />
            </div>
            <div>
                <input
                    type="number"
                    name="sellerPrice"
                    placeholder="Seller Price"
                    value={form.sellerPrice}
                    onChange={(e) => setForm({ ...form, sellerPrice: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                />
            </div>
            <div>
                <input
                    type="number"
                    name="sellerQty"
                    placeholder="Seller Quantity"
                    value={form.sellerQty}
                    onChange={(e) => setForm({ ...form, sellerQty: e.target.value })}
                    className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white"
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
                Place Order
            </button>
        </form>
    );
};

export default OrderForm;
