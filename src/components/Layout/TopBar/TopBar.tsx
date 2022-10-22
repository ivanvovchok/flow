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
    <Row>
      <Col span={4}>
          <Logo />
      </Col>
      <Col span={20}>
        <Row style={{ position: 'fixed', right: 32, zIndex: 100}}>
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
            <Avatar size={"large"} style={{ backgroundColor: 'orange', cursor: 'pointer' }} icon={<UserOutlined />} />
          </Popover>
        </Row>
      </Col>
    </Row>
  )
}

export default TopBar