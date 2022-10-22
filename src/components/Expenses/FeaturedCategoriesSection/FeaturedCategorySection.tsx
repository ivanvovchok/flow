import React from 'react';
import {Col, Divider, Row, Tag} from 'antd';
import FeaturedCategoryChart from "./FeaturedCategoryChart";

const FeaturedCategorySection: React.FC = () => {
  return (
    <>
      <Divider>Вибрані категорії:</Divider>
      <Row gutter={24} justify={"space-evenly"} style={{marginTop: 20}}>
        <Col span={7}>
          <Tag color="#108ee9" style={{marginBottom: 10}}>Їжа</Tag>
          <FeaturedCategoryChart/>
        </Col>
        <Col span={7}>
          <Tag color="#2db7f5" style={{marginBottom: 10}}>Розваги</Tag>
          <FeaturedCategoryChart/>
        </Col>
        <Col span={7}>
          <Tag color="#87d068" style={{marginBottom: 10}}>Транспорт</Tag>
          <FeaturedCategoryChart/>
        </Col>
      </Row>
    </>

  );
}

export default FeaturedCategorySection