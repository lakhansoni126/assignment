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
        <div className="w-full md:w-3/4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Quantity</label>
                    <input type="number" name="qty" className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Price</label>
                    <input type="number" name="price" className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Select Type</label>
                    <select name="type" className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Place Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
