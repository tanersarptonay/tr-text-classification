import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
} from 'chart.js';
import { forwardRef } from 'react';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip
  );

const RadarChart = forwardRef((props, ref) => (
  <div ref={ref}>
    <Radar data={props.data} options={props.options} />
  </div>
))

export default RadarChart;