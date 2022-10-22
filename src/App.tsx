import React from 'react';
import Dashboard from "./components/Layout/Dashboard";
import DashboardWrapper from "./components/Layout/DashboardWrapper";
import Preloader from "./components/Layout/Preloader";

import 'antd/dist/antd.css';

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);

  return (
    <DashboardWrapper>
      {isLoaded ? <Dashboard /> : <Preloader />}
    </DashboardWrapper>
  );
}

export default App;
