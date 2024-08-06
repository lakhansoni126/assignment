import React, { useState } from 'react';

function InputForm({ addDataPoint }) {
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (price) {
            addDataPoint({ price: parseFloat(price) });
            setPrice('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex items-center justify-center space-x-2">
                <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border rounded px-4 py-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Data Point
                </button>
            </div>
        </form>
    );
}

export default InputForm;
