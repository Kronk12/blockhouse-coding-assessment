import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from 'react-chartjs-2';


const BarChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the bar chart data from the API
    fetch('http://localhost:8000/api/bar-chart-data/')
      .then(response => response.json())
      .then(data => {
        // Transform the API data into the format needed by Chart.js
        const formattedData = {
          labels: data.labels, // X-axis labels
          datasets: [
            {
              label: 'Sales', // Legend label
              data: data.data, // Y-axis data points
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };
        setChartData(formattedData);
      })
      .catch(error => console.error('Error fetching bar chart data:', error));
  }, []);

  if (!chartData) {
    return <p>Loading...</p>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChartComponent;
