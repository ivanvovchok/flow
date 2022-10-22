import React from 'react';
import { Layout, Row, Col } from 'antd';
import TopBar from "../TopBar";
import ExpenseChart from "../ExpenseChart";
import ExpenseTable from "../ExpenseTable";

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
            <ExpenseChart/>
          </Col>
          <Col span={12}>
            <ExpenseTable/>
          </Col>
        </Row>
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Dashboard