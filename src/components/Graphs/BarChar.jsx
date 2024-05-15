import { BarChart } from '@tremor/react';

const chartdata = [
  {
    month: 'January',
    'Incomes per month': 743,
  },
  {
    month: 'February',
    'Incomes per month': 1445,
  },
  {
    month: 'March',
    'Incomes per month': 1390,
  },
  {
    month: 'April',
    'Incomes per month': 1000,
  },
  {
    month: 'May',
    'Incomes per month': 690,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

function BarChartHero() {
  return (
    <BarChart
      data={chartdata}
      index="month"
      categories={['Incomes per month']}
      colors={['blue', 'green', 'red']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      onValueChange={(v) => console.log(v)}
    />
  );
}

export default BarChartHero;