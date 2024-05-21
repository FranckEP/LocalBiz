import {useState, useEffect} from 'react';
import { Chart } from 'primereact/chart';

function BarChartHero() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Transferencia',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [1202, 1204, 2343, 1230, 4232, 3231, 2341]
                },
                {
                    label: 'Efectivo',
                    backgroundColor: documentStyle.getPropertyValue('--green-400'),
                    borderColor: documentStyle.getPropertyValue('--green-400'),
                    data: [2403, 2421, 3452, 1305, 3523, 2453, 1231]
                },
                {
                  label: 'Pendiente',
                  backgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                  borderColor: documentStyle.getPropertyValue('--yellow-400'),
                  data: [120, 242, 452, 305, 523, 453, 231]
              }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}

export default BarChartHero;