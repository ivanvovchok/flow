import React from 'react';
import { Table } from 'antd';
import useDataTable from "./useDataTable";

const DataTable: React.FC = () => {
  const {
    data,
    columns
  } = useDataTable()

  return (
    <Table size={"small"} bordered dataSource={data} columns={columns}/>
  )
}

export default DataTable