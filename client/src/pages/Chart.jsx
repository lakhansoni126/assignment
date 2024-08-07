import React, { useState } from 'react';
import ChartSection from '../components/ChartSection';
import InputForm from '../components/InputForm';

function Chart() {
    const [data, setData] = useState([]);

    const addDataPoint = (newDataPoint) => {
        setData([...data, newDataPoint]);
    };

    return (
        <div className="App container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center">Dynamic Chart Application</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center">
                <div className="w-full md:w-4/5 flex items-start justify-end">
                    <div className="w-full md:w-11/12">
                        <ChartSection data={data} />
                    </div>
                </div>
                <div className="w-full md:w-1/5 flex items-start justify-start">
                    <div className="w-full md:w-3/4">
                        <InputForm addDataPoint={addDataPoint} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart;
