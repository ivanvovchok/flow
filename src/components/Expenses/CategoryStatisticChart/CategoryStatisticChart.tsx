import React from "react";
import {Column} from '@ant-design/plots';
import useCategoryStatisticChart from "./useCategoryStatisticChart";

const CategoryStatisticChart: React.FC = () => {
  const {config} = useCategoryStatisticChart();

  return (
    <Column {...config} />
  );
}

export default CategoryStatisticChart