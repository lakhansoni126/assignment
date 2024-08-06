import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';

const App = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  const refreshOrders = async () => {
    try {
      const pendingRes = await axios.get('https://assignment-three-roan.vercel.app/api/v1/orders/pending-orders');
      setPendingOrders(pendingRes.data || []);
      const completedRes = await axios.get('https://assignment-three-roan.vercel.app/api/v1/orders/completed-orders');
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Order Matching System</h1>
      <OrderForm refreshOrders={refreshOrders} />
      <OrderTable title="Pending Orders" orders={pendingOrders} />
      <OrderTable title="Completed Orders" orders={completedOrders} />
    </div>
  );
};

export default App;
