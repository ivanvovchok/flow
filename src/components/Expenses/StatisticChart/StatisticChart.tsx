import React from "react";
import { Line } from '@ant-design/plots';
import useStatisticChart from "./useStatisticChart";

const StatisticChart: React.FC = () => {
  const { config } = useStatisticChart();

  return(
    <Line {...config} />
  );
}

export default StatisticChart