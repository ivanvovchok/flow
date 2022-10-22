interface DataType {
  category: string;
  date: string;
  amount: number;
}

const useStatisticChart = () => {

  const data: DataType[] = [
    {
      category: 'Їжа',
      date: '01.01.2022',
      amount: 255
    },
    {
      category: 'Розваги',
      date: '01.01.2022',
      amount: 140
    },
    {
      category: 'Транспорт',
      date: '01.01.2022',
      amount: 30
    },
    {
      category: 'Їжа',
      date: '02.01.2022',
      amount: 300
    },
    {
      category: 'Розваги',
      date: '02.01.2022',
      amount: 80
    },
    {
      category: 'Транспорт',
      date: '02.01.2022',
      amount: 65
    },
    {
      category: 'Їжа',
      date: '03.01.2022',
      amount: 120
    },
    {
      category: 'Розваги',
      date: '03.01.2022',
      amount: 400
    },
    {
      category: 'Транспорт',
      date: '04.01.2022',
      amount: 50
    },
  ];

  const config = {
    data,
    xField: 'date',
    yField: 'amount',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v: any) => `${v} грн`,
      },
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  return {
    config
  };
}

export default useStatisticChart

