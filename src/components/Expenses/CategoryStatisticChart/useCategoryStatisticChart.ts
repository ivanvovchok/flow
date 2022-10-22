interface DataType {
  category: string;
  amount: number;
}

const useDailyStatisticChart = () => {

  const data: DataType[] = [
    {
      category: 'Їжа',
      amount: 675
    },
    {
      category: 'Розваги',
      amount: 620
    },
    {
      category: 'Транспорт',
      amount: 145
    }
  ];

  const config = {
    data,
    xField: 'category',
    yField: 'amount',
    label: {
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'test',
      },
      sales: {
        alias: 'test',
      },
    },
  };

  return {
    config
  };
}

export default useDailyStatisticChart

