import { Chart } from 'primereact/chart';
import {useState, useEffect} from 'react';

const sales = [
  {
    name: 'Transferencia',
    sales: 980,
  },
  {
    name: 'Efectivo',
    sales: 456,
  },
  {
    name: 'Pendiente',
    sales: 390,
  },
];

function DonutChartUsageExample() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Transferencia', 'Efectivo', 'Pendiente'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <>
      <div className="flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="flex w-96 md:w-30rem" />
        </div>
    </>
  );
}

export default DonutChartUsageExample;