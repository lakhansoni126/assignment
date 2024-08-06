import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function ChartSection({ data }) {
    const chartData = {
        labels: data.map((_, index) => index + 1),
        datasets: [
            {
                label: 'Price',
                data: data.map(point => point.price),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Data Points',
                    color: '#ffffff'
                },
                ticks: {
                    color: '#ffffff'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                    color: '#ffffff'
                },
                ticks: {
                    color: '#ffffff'
                }
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            },
        },
    };

    return (
        <div className="h-96"> {/* Adjust the height using Tailwind CSS */}
            <Line data={chartData} options={options} />
        </div>
    );
}

export default ChartSection;