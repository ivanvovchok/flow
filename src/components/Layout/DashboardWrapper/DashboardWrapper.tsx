import React from "react";

interface IDashboardWrapperProps {
  children: React.ReactNode
}

const DashboardWrapper: React.FC<IDashboardWrapperProps> = ({children}) => {

  return (
    <div style={{
      padding: 16,
      backgroundColor: '#4158D0',
      backgroundImage: 'linear-gradient(90deg, #0093E9 0%, #80D0C7 100%)'
    }}>
      {children}
    </div>
  )
}

export default DashboardWrapper


