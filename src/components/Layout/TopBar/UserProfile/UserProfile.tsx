import React, {Dispatch, SetStateAction} from "react";
import { Statistic, Drawer } from 'antd';

interface IUserCardPrpps {
  isVisible: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

const UserCard: React.FC<IUserCardPrpps> = ({}) => {

  return (
    <Drawer
      placement="right"
      onClose={hideDrawer}
      open={isVisible}
    >
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
    </Drawer>
  )
}

export default UserCard