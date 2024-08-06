import React, { useState } from 'react';
import ChartSection from '../components/ChartSection';
import InputForm from '../components/InputForm';

function Chart() {
    const [data, setData] = useState([]);

    const addDataPoint = (newDataPoint) => {
        setData([...data, newDataPoint]);
    };

    return (
        <div className="App container mx-auto p-4 dark:bg-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Dynamic Chart Application</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <ChartSection data={data} />
                <InputForm addDataPoint={addDataPoint} />
            </div>
        </div>
    );
}

export default Chart;
