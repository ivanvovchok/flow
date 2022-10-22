import React from "react";
import { RedoOutlined } from "@ant-design/icons";

const Logo: () => JSX.Element = () => {

  return (
    <h1 style={{
      margin: 0,
      paddingLeft: 10,
      fontSize: 28,
      fontWeight: 200,
      color: "#C850C0",
    }}>FL<RedoOutlined spin />W</h1>
  )
}

export default Logo