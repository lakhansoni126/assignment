import React, { useState } from 'react';
import ChartSection from '../components/ChartSection';
import InputForm from '../components/InputForm';

function Chart() {
    const [data, setData] = useState([]);

    const addDataPoint = (newDataPoint) => {
        setData([...data, newDataPoint]);
    };

    return (
        <div className="App container mx-auto p-4 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Dynamic Chart Application</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-4/5">
                    <ChartSection data={data} />
                </div>
                <div className="w-full md:w-1/5">
                    <InputForm addDataPoint={addDataPoint} />
                </div>
            </div>
        </div>
    );
}

export default Chart;
