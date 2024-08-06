import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MatchingOrder from './pages/MatchingOrder';
import Chart from './pages/Chart';

const App = () => {
  return (
    <div className="App container mx-auto p-4 bg-gray-900 text-white">
      <Router>
        <nav className="mb-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-400 hover:text-blue-600">
            Charts
          </Link>
          <Link to="/MatchingOrder" className="text-blue-400 hover:text-blue-600">
            Orders
          </Link>
        </nav>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <Routes>
            <Route path="/" element={<Chart />} />
            <Route path="/MatchingOrder" element={<MatchingOrder />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
