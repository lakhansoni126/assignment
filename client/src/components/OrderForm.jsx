import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ refreshOrders }) => {
    const [form, setForm] = useState({ qty: '', price: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting data:", form);
            const response = await axios.post('https://backend-liart-theta.vercel.app/api/v1/orders/new-order', form);
            setForm({ qty: '', price: '', type: '' });
            alert('Order executed successfully!');
            refreshOrders();
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);

            alert('Error executing order. Please try again.');
        }
    };

    return (
        <div className="w-full md:w-3/4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Quantity</label>
                    <input
                        type="number"
                        name="qty"
                        value={form.qty}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Select Type</label>
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Select Type</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
