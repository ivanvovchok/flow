import type {ColumnsType} from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  amount: number;
  category: string;
  date: string
}

const useDataTable = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Назва',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Сума',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Категорія',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date'
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Піца',
      amount: 250,
      category: 'Їжа',
      date: '15.10.2022'
    },
    {
      key: '2',
      name: 'Рахунок за воду',
      amount: 130,
      category: 'Комунальні платежі',
      date: '16.10.2022'
    },
    {
      key: '3',
      name: 'Шампунь',
      amount: 200,
      category: 'Гігієна',
      date: '16.10.2022'
    },
    {
      key: '4',
      name: 'Книга',
      amount: 450,
      category: 'Розваги',
      date: '16.10.2022'
    },
  ];

  return {
    columns,
    data
  }
}

export default useDataTable