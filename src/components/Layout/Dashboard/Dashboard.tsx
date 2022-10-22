import React from 'react';
import { Layout, Row, Col, Tabs, BackTop } from 'antd';
import TopBar from "../TopBar/TopBar";
import OverviewChart from "../../Expenses/OverviewChart";
import DailyStatisticChart from "../../Expenses/DailyStatisticChart";
import CategoryStatisticChart from "../../Expenses/CategoryStatisticChart";
import FeaturedCategorySection from "../../Expenses/FeaturedCategoriesSection";
import DataTable from "../../Expenses/DataTable";

const { Footer, Content } = Layout;

const Dashboard: React.FC = () => {

  return (
    <Layout
      style={{
        padding: 16,
        borderRadius: 10,
        backgroundColor:'white',
      }}
    >
      <BackTop />
      <TopBar total={266}/>
      <Content style={{ marginTop: 0 }}>
        <Row gutter={24}>
          <Col span={12}>
            <Tabs centered defaultActiveKey="1">
              <Tabs.TabPane tab="Витрати" key="1">
                <OverviewChart/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Доходи " key="2">
                <OverviewChart/>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={12}>
            <Tabs centered defaultActiveKey="1">
              <Tabs.TabPane tab="По дням" key="1">
                <DailyStatisticChart/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="По категоріям" key="2">
                <CategoryStatisticChart/>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <FeaturedCategorySection />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <DataTable/>
          </Col>
        </Row>
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Dashboard