import React from "react";
import { Divider, Statistic } from 'antd';

const UserCard: () => JSX.Element = () => {

  return (
      <div style={{ minWidth: 240, maxWidth: 480 }}>
        <div style={{  marginBottom: 20, textTransform: 'uppercase', wordWrap: 'break-word'}}>
          <p style={{ margin: 0, fontSize: 24, fontWeight: 300 }}>Іван Вовчок 🪐</p>
        </div>
        <Statistic
          title="Баланс"
          value={223566.55}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          suffix="грн."
        />


      </div>
  )
}

export default UserCard