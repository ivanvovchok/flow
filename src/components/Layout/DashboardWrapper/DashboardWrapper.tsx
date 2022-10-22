import React from "react";
import Dashboard from "../Dashboard";

interface IDashboardWrapperProps {
  children: React.ReactNode
}

const DashboardWrapper: React.FC<IDashboardWrapperProps> = ({ children }) => {

  return(
    <div style={{
      padding: 16,
      backgroundColor: '#4158D0',
      backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
    }}>
      { children }
    </div>
  )
}

export default DashboardWrapper


