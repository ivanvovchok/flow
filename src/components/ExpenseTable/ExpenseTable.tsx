import React from 'react';
import { Table } from 'antd';
import useExpenseTable from "./useExpenseTable";

const ExpenseTable: React.FC = () => {
  const {
    data,
    columns
  } = useExpenseTable()

  return (
    <Table size={"small"} bordered dataSource={data} columns={columns}/>
  )
}

export default ExpenseTable