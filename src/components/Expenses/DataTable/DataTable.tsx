import React from 'react';
import {Table, Divider, Input, Row} from 'antd';
import useDataTable from "./useDataTable";

const {Search} = Input;

const DataTable: React.FC = (): JSX.Element => {
  const {
    data,
    columns
  } = useDataTable();

  return (
    <>
      <Divider
        style={{
          marginBottom: 20
        }}
      >Історія витрат:</Divider>
      <Row justify={'end'}>
        <Search
          enterButton
          style={{
            width: 240,
            marginBottom: 20
          }} />
      </Row>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          hideOnSinglePage: true,
          pageSize:10,

        }}
      />
    </>
  )
}

export default DataTable