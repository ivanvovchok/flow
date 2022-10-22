import React from "react";
import { Line } from '@ant-design/plots';
import useDailyStatisticChart from "./useDailyStatisticChart";

const DailyStatisticChart: React.FC = () => {
  const { config } = useDailyStatisticChart();

  return(
    <Line {...config} />
  );
}

export default DailyStatisticChart