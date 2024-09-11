import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './dashboard';
import './global.css';

const IndexPage = () => {
  useEffect(() => {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <Dashboard />
        </React.StrictMode>
      );
    }
  }, []);

  return <div id="root"></div>; // This div is necessary for the root element
};

export default IndexPage;
