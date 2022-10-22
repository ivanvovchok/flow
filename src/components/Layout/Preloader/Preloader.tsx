import React from "react";
import {SyncOutlined} from "@ant-design/icons";

const Preloader: React.FC = () => {

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 32px)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 28,
        fontWeight: 200,
        color: "white",
      }}
    >
      FL<SyncOutlined spin/>W
    </div>
  )
}

export default Preloader