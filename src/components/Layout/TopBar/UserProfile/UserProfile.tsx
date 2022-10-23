import React, {Dispatch, SetStateAction} from "react";
import {Avatar, Drawer, Row, Col, Statistic} from 'antd';

interface IUserProfileProps {
  isVisible: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

const UserProfile: React.FC<IUserProfileProps> = ({isVisible, onClose}) => {

  const hideDrawer = (): void => {
    onClose(false);
  }

  return (
    <Drawer
      title={"Мій профіль"}
      placement="right"
      onClose={hideDrawer}
      open={isVisible}
    >
      <div
        style={{
          marginBottom: 40,
          padding: 4,
          borderRadius: 16,
          backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
        }}
      >
        <div
          style={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar src={"https://avatars.dicebear.com/api/avataaars/ivan.svg"} size={"large"}/>
        </div>
        <div style={{
          margin: 0,
          display: "flex",
          color: "white",
          justifyContent: "center",
          textTransform: 'uppercase',
          wordWrap: 'break-word',
        }}
        >
          <p style={{margin: 0, fontSize: 24, fontWeight: 400}}>Іван Вовчок</p>
        </div>
      </div>
      <Statistic
        title="Баланс"
        value={223566.55}
        precision={2}
        valueStyle={{color: '#3f8600'}}
        suffix="грн."
        style={{
          marginBottom: 20
        }}
      />
      <Row>
        <Col span={12}>
          <Statistic
            title="Витрачено сьогодні"
            value={550}
            precision={0}
            valueStyle={{color: '#cf1322'}}
            style={{
              marginBottom: 20
            }}
            suffix="грн."
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Зароблено сьогодні"
            value={3600}
            precision={0}
            valueStyle={{color: '#3f8600'}}
            style={{
              marginBottom: 20
            }}
            suffix="грн."
          />
        </Col>
      </Row>
    </Drawer>
  )
}

export default UserProfile