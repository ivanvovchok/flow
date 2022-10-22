import React from 'react';
import { Layout, Row, Col } from 'antd';
import TopBar from "../TopBar/TopBar";
import OverviewChart from "../../Expenses/OverviewChart";
import StatisticChart from "../../Expenses/StatisticChart";
import DataTable from "../../Expenses/DataTable";

const { Footer, Content } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout
      style={{
        margin:20,
        borderRadius:10,
        backgroundColor:'white',
      }}
    >
      <TopBar total={266}/>
      <Content style={{ marginTop:40 }}>
        <Row gutter={24}>
          <Col span={12}>
            <OverviewChart/>
          </Col>
          <Col span={12}>
            <StatisticChart/>
          </Col>
        </Row>
        <DataTable/>
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Dashboard