import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch the line chart data from the API
    fetch('http://localhost:8000/api/line-chart-data/')
      .then(response => response.json())
      .then(data => {
        // Transform the API data into the format needed by Chart.js
        const formattedData = {
          labels: data.labels, // X-axis labels
          datasets: [
            {
              label: 'Line Dataset', // Legend label
              data: data.data, // Y-axis data points
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        };
        setChartData(formattedData);
      })
      .catch(error => console.error('Error fetching line chart data:', error));
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

  return <Line data={chartData} options={options} />;
};

export default LineChart;
