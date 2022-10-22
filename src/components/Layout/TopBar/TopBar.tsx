import React from 'react';
import {Button, Col, Row} from 'antd';
import {MinusOutlined, PlusOutlined, UserOutlined} from '@ant-design/icons';
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import RangeSelector from "./RangeSelector";
import CreateEntryForm from "../../Forms/CreateEntryForm";
import useTopBar from "./useTopBar";

interface ITopBarProps {
  total: number
}

const TopBar: React.FC<ITopBarProps> = ({total}) => {
  const {
    isUserProfileVisible,
    setUserProfileVisible,
    isCreateEntryFormVisible,
    setCreateEntryFormVisible,
    currentEntryType,
    setCurrentEntryType
  } = useTopBar();

  return (
    <>
      <Row>
        <Col span={8}>
          <Logo/>
        </Col>
        <Col span={16}>
          <Row style={{position: 'fixed', right: 32, zIndex: 100}}>
            <RangeSelector/>
            <Button
              shape={"circle"}
              type={"primary"}
              size={"large"}
              icon={<PlusOutlined/>}
              onClick={() => {
                setCurrentEntryType('income')
                setCreateEntryFormVisible(true)
              }}
              style={{
                marginRight: 10
              }}
            />
            <Button
              shape={"round"}
              type={"primary"}
              size={"large"}
              danger
              icon={<MinusOutlined/>}
              onClick={() => {
                setCurrentEntryType('outcome')
                setCreateEntryFormVisible(true)
              }}
              style={{
                marginRight: 10
              }}
            />
            <Button
              shape={"circle"}
              size={"large"}
              icon={<UserOutlined/>}
              onClick={() => {
                setUserProfileVisible(true)
              }}
              style={{
                marginRight: 10
              }}
            />
          </Row>
        </Col>
      </Row>
      <CreateEntryForm
        isVisible={isCreateEntryFormVisible}
        entryType={currentEntryType}
        onClose={() => {
          setCreateEntryFormVisible(false)
        }}
      />
      <UserProfile isVisible={isUserProfileVisible} onClose={() => {
        setUserProfileVisible(false)
      }}/>
    </>
  )
}

export default TopBar