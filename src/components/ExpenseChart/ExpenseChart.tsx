import React from 'react';
import { Pie } from '@ant-design/plots';
import useExpenseChart from "./useExpenseChart";

const ExpenseChart: React.FC = () => {
  const {
    config
  } = useExpenseChart()

  return(
    <Pie {...config} />
  )
}

export default ExpenseChart