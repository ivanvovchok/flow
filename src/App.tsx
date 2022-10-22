import React from 'react';
import Dashboard from "./components/Layout/Dashboard";
import DashboardWrapper from "./components/Layout/DashboardWrapper";

import 'antd/dist/antd.css';

function App() {
  return (
    <DashboardWrapper>
      <Dashboard/>
    </DashboardWrapper>
  );
}

export default App;
