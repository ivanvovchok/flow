import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const RangeSelector: React.FC = () => {

  return (
    <>
      <RangePicker
        style={{ marginRight: 10, borderRadius: 16}}
        format={'DD.MM.YYYY'}
      />
    </>
  )
}

export default RangeSelector