import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface ITopBarProps {
  total: number
}

const TopBar: React.FC<ITopBarProps> = ({total}) => {
  return (
      <Row
        align={"middle"}
      >
        <Col
          span={24}
        >
          <Row
            justify={"end"}
            align={"middle"}
          >
            <div
              style={{
                marginRight:20,
                fontSize:22,
              }}
            >
              ₴ {total}
            </div>
            <Button
              shape={"circle"}
              type={"primary"}
              size={"large"}
              icon={<PlusOutlined/>}
              style={{
                marginRight:10
              }}
            />
            <Button
              shape={"round"}
              type={"primary"}
              size={"large"}
              danger
              icon={<MinusOutlined/>}
            />
          </Row>
        </Col>
      </Row>
  )
}

export default TopBar