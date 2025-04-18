import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Axis, Chart as ElasticChart, Position, Settings, BarSeries, TexturedStyles } from '@elastic/charts';
import { data } from './data';

import '@elastic/charts/dist/theme_light.css';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const textureMap: TexturedStyles[] = [
  { shape: 'triangle', size: 30 },
  { shape: 'line', size: 10, spacing: 10 },
  { shape: 'circle' },
  { shape: 'plus' },
]

export function Chart() {
  return (
    <ElasticChart>
      <Settings
        theme={{
          barSeriesStyle: {
            rect: {
              texture: {
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
          barSeriesStyle={{
            rect: {
              texture: textureMap[i],
            }
          }}
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
