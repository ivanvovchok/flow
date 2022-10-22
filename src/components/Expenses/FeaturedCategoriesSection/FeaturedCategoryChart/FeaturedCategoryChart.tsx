import React from "react";
import {TinyArea} from '@ant-design/plots';
import useFeaturedCategoryChart from "./useFeaturedCategoryChart";

const FeaturedCategoryChart: React.FC = () => {
  const {config} = useFeaturedCategoryChart();

  return (
    <TinyArea {...config} />
  )
}

export default FeaturedCategoryChart