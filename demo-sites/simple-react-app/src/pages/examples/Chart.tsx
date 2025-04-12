import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Axis, Chart as ElasticChart, Position, Settings, BarSeries } from '@elastic/charts';
import { data } from './data';

import '@elastic/charts/dist/theme_light.css';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export function Chart() {
  return (
    <ElasticChart>
      <Settings
        theme={{
          areaSeriesStyle: {
            area: {
              texture: {
                shape: 'circle',
                strokeWidth: 1,
                rotation: 45,
                shapeRotation: 0,
                size: 20,
                opacity: 1,
                spacing: { x: 10, y: 10 },
                offset: { x: 0, y: 0, global: true },
              },
              fill: 'transparent',
            },
          },
          barSeriesStyle: {
            rect: {
              texture: {
                shape: 'circle',
                strokeWidth: 1,
                rotation: 45,
                shapeRotation: 0,
                size: 20,
                opacity: 1,
                spacing: { x: 10, y: 10 },
                offset: { x: 0, y: 0, global: true },
              },
              fill: 'transparent',
            },
            rectBorder: { visible: true, strokeWidth: 2 },
          },
        }}
      />

      <Axis id="bottom" position={Position.Bottom} />
      <Axis id="left" position={Position.Left} />

      {new Array(4).fill(0).map((v, i) => (
        <BarSeries
          key={i}
          id={`series-${i}`}
          xAccessor="x"
          yAccessors={['y']}
          color={'rgba(0,0,0,1)'}
          stackAccessors={['yes']}
          data={data[i]}
        />
      ))}
    </ElasticChart>
  );
}
