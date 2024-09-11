import React from 'react';
import CandlestickChart from '@/components/charts/CandlestickChart';
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import PieChart from '@/components/charts/PieChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="charts-grid">
        {/* Stacked Bar and Line Charts */}
        <div className="chart-container stacked-charts-container">
          <div className="chart-title">Bar Chart</div>
          <BarChart />
          <div className="chart-title">Line Chart</div>
          <LineChart />
        </div>

        {/* Candlestick Chart taking the central and larger space */}
        <div className="chart-container candlestick-container">
          <h2 className="chart-title">Candlestick Chart</h2>
          <CandlestickChart />
        </div>

        {/* Pie Chart */}
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
