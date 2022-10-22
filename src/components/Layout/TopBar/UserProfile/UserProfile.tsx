import React, {Dispatch, SetStateAction} from "react";
import {Avatar, Drawer, Statistic} from 'antd';

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
          marginBottom: 20,
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
      />
    </Drawer>
  )
}

export default UserProfile