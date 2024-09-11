import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the chart data structure
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const PieChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    // Fetch the pie chart data from the API
    fetch('http://localhost:8000/api/pie-chart-data/')
      .then(response => response.json())
      .then(data => {
        // Transform the API data into the format needed by Chart.js
        const formattedData: ChartData = {
          labels: data.labels, // Labels for the pie chart slices
          datasets: [
            {
              label: 'Pie Dataset', // Legend label
              data: data.data, // Data for each slice
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',  // Red
                'rgba(54, 162, 235, 0.5)',  // Blue
                'rgba(255, 205, 86, 0.5)',  // Yellow
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };
        setChartData(formattedData);
      })
      .catch(error => console.error('Error fetching pie chart data:', error));
  }, []);

  if (!chartData) {
    return <p>Loading...</p>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      // title: {
      //   display: true,
      //   text: 'Pie Chart Data',
      // },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
