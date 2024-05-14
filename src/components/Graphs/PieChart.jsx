import { DonutChart, Legend } from '@tremor/react';

const sales = [
  {
    name: 'Nequi',
    sales: 980,
  },
  {
    name: 'Efectivo',
    sales: 456,
  },
  {
    name: 'Fiado',
    sales: 390,
  },
];

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

function DonutChartUsageExample() {
  return (
    <>
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'violet', 'yellow']}
          className="w-64 h-64"
        />
      </div>
      <div className="flex items-center justify-center space-x-6">
        <Legend
            categories={['Nequi', 'Efectivo', 'Fiado']}
            colors={['blue', 'violet', 'yellow']}
            className="max-w-xs mt-3"
            />
      </div>
    </>
  );
}

export default DonutChartUsageExample;