import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderForm from '../components/OrderForm';
import OrderTable from '../components/OrderTable';

const MatchingOrder = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    const refreshOrders = async () => {
        try {
            const pendingRes = await axios.get('https://backend-liart-theta.vercel.app/api/v1/orders/pending-orders');
            setPendingOrders(pendingRes.data || []);

            const completedRes = await axios.get('https://backend-liart-theta.vercel.app/api/v1/orders/completed-orders');
            setCompletedOrders(completedRes.data || []);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setPendingOrders([]);
            setCompletedOrders([]);
        }
    };

    useEffect(() => {
        refreshOrders();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Order Matching System</h1>
            <div className="flex flex-col md:flex-row justify-center items-start md:space-x-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-end">
                    <OrderForm refreshOrders={refreshOrders} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-4">
                    <OrderTable title="Pending Orders" orders={pendingOrders} />
                    <OrderTable title="Completed Orders" orders={completedOrders} />
                </div>
            </div>
        </div>
    );
};

export default MatchingOrder;
