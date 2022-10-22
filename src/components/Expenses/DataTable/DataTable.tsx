import React from 'react';
import { Table } from 'antd';
import useDataTable from "./useDataTable";

const DataTable: React.FC = () => {
  const {
    data,
    columns
  } = useDataTable()

  return (
    <Table dataSource={data} columns={columns}/>
  )
}

export default DataTable