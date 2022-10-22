import React from 'react';
import { Row, Col, Button, Avatar, Popover } from 'antd';
import { PlusOutlined, MinusOutlined, UserOutlined } from '@ant-design/icons';
import Logo from "./Logo";
import UserCard from "./UserCard";

interface ITopBarProps {
  total: number
}

const TopBar: React.FC<ITopBarProps> = ({total}) => {
  return (
    <Row align={"middle"}>
      <Col span={4}>
        <Row align={"middle"}>
          <Logo />
        </Row>
      </Col>
      <Col span={20}>
        <Row justify={"end"} align={"middle"}>
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
            style={{
              marginRight:10
            }}
          />
          <Popover content={<UserCard/>} placement={"bottomRight"}>
            <Avatar size={"large"} style={{ backgroundColor: '#FFCC70', cursor: 'pointer' }} icon={<UserOutlined />} />
          </Popover>
        </Row>
      </Col>
    </Row>
  )
}

export default TopBar