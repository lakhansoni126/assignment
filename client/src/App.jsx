import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import MatchingOrder from './pages/MatchingOrder';
import Chart from './pages/Chart';

const App = () => {
  return (

    <div className="App container mx-auto p-4">
      <BrowserRouter>
        <nav className="mb-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Charts
          </Link>
          <Link to="/MatchingOrder" className="text-blue-500 hover:text-blue-700">
            Orders
          </Link>
        </nav>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Routes>
            <Route path="/" element={<Chart />} />
            <Route path="/MatchingOrder" element={<MatchingOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
