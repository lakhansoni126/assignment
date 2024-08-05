import React from 'react';

const OrderTable = ({ title, orders }) => {
    if (!Array.isArray(orders)) {
        return <div>No orders available</div>;
    }

    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        {orders.length > 0 && Object.keys(orders[0]).map((key) => (
                            <th key={key} className="py-2 px-4 border-b border-gray-300">{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-100">
                            {Object.values(order).map((value, index) => (
                                <td key={index} className="py-2 px-4 border-b border-gray-300">{value}</td>
                            ))}
                        </tr>
                    )) : (
                        <tr>
                            <td className="py-2 px-4 border-b border-gray-300 text-center" colSpan={Object.keys(orders[0] || {}).length}>
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
