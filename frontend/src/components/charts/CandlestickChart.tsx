import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandlestickChart = () => {
  const chartContainerRef = useRef();
  const chartRef = useRef(); // To keep track of the chart instance
  const candlestickSeriesRef = useRef(); // To keep track of the candlestick series

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeriesRef.current = candlestickSeries; // Store the series instance
    chartRef.current = chart; // Store the chart instance

    fetch('http://localhost:8000/api/candlestick-data/')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.data.map(item => ({
          time: item.x, // The time must be in UNIX timestamp or string format
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }));
        candlestickSeries.setData(formattedData);
      })
      .catch(error => console.error('Error loading the candlestick data:', error));

    const handleResize = () => {
      chart.applyOptions({ 
        width: chartContainerRef.current.clientWidth, 
        height: chartContainerRef.current.clientHeight 
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '400px' }} />
  );
};

export default CandlestickChart;
