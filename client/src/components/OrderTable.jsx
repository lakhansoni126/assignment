import React from 'react';

const OrderTable = ({ title, orders }) => {
    if (!Array.isArray(orders)) {
        return <div className="text-white">No orders available</div>;
    }

    return (
        <div className="w-full md:w-3/4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
            <table className="min-w-full bg-gray-800 text-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-700">Qty</th>
                        <th className="py-2 px-4 bg-gray-700">Price</th>
                        <th className="py-2 px-4 bg-gray-700">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-2 px-4">{order.qty}</td>
                            <td className="py-2 px-4">{order.price}</td>
                            <td className="py-2 px-4">{order.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
