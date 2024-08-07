import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MatchingOrder from './pages/MatchingOrder';
import Chart from './pages/Chart';

const App = () => {
  return (
    <div className="App h-screen bg-gray-900 text-white">
      <Router>
        <nav className="pt-1 mb-1 flex justify-center">
          <div className="bg-gray-800 p-4 rounded-full shadow-md flex space-x-6">
            <Link to="/" className="text-white-400 hover:text-blue-600 text-lg">
              Orders
            </Link>
            <Link to="/Chart" className="text-white-400 hover:text-blue-600 text-lg">
              Charts
            </Link>
          </div>
        </nav>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-1">
          <Routes>
            <Route path="/" element={<MatchingOrder />} />
            <Route path="/Chart" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
