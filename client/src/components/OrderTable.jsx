import React from 'react';

const OrderTable = ({ title, orders }) => {
    if (!Array.isArray(orders)) {
        return <div className="text-white">No orders available</div>;
    }

    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <table className="min-w-full bg-gray-800 border border-gray-700">
                <thead className="bg-gray-700">
                    <tr>
                        {orders.length > 0 && Object.keys(orders[0]).map((key) => (
                            <th key={key} className="py-2 px-4 border-b border-gray-700 text-white">{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-600">
                            {Object.values(order).map((value, index) => (
                                <td key={index} className="py-2 px-4 border-b border-gray-700 text-white">{value}</td>
                            ))}
                        </tr>
                    )) : (
                        <tr>
                            <td className="py-2 px-4 border-b border-gray-700 text-center text-white" colSpan={Object.keys(orders[0] || {}).length}>
                                No orders available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
