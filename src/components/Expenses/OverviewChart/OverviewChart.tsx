import React from 'react';
import { Pie } from '@ant-design/plots';
import useOverviewChart from "./useOverviewChart";

const OverviewChart: React.FC = () => {
  const {
    config
  } = useOverviewChart()

  return(
    <Pie {...config} />
  )
}

export default OverviewChart