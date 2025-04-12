import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export function Canvas() {
  return (
    <Scatter
      options={{
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
      data={{
        datasets: [
          {
            label: 'Sample Dataset 1',
            data: Array.from({ length: 100 }, () => ({
              x: faker.number.int({ min: -100, max: 100 }),
              y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: '#7AC6D2',
          },
          {
            label: 'Sample Dataset 2',
            data: Array.from({ length: 100 }, () => ({
              x: faker.number.int({ min: -100, max: 100 }),
              y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: '#3D90D7',
          },
          {
            label: 'Sample Dataset 3',
            data: Array.from({ length: 100 }, () => ({
              x: faker.number.int({ min: -100, max: 100 }),
              y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: '#3A59D1',
          },
        ],
      }}
    />
  );
}
