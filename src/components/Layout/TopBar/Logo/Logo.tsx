import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const Logo: () => JSX.Element = () => {

  return (
    <h1 style={{
      margin: 0,
      paddingLeft: 10,
      fontSize: 28,
      fontWeight: 200,
      color: "#0093E9",
    }}>FL<SyncOutlined />W</h1>
  )
}

export default Logo