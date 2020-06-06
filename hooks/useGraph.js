import { useEffect, useState } from 'react';
import { pluck } from 'lodash/fp';
import { scaleLinear as d3ScaleLinear, extent as d3Extent } from 'd3';

import { PADDING, maxHeight, maxWidth } from '../constants/internals';

export const defaultValue = {
  xScale: () => 0,
  setXScale: () => {},
  yScale: () => 0,
  data: [],
};

export default function useGraph(data) {
  const [ready, setReady] = useState(false);
  const [scale, setScale] = useState({
    x: () => 0,
    y: () => 0,
  });

  useEffect(() => {
    const $xScale = d3ScaleLinear()
      .domain(d3Extent(pluck('month', data)))
      .range([PADDING, maxWidth - PADDING]);
    const $yScale = d3ScaleLinear()
      .domain([0, 90])
      .range([maxHeight - PADDING, PADDING]);
    setScale({
      x: $xScale,
      y: $yScale,
    });
    // console.log($xScale(1));
    setReady(true);
  }, [data]);

  if (ready) {
    return {
      xScale: scale.x,
      setXScale: (v) => setScale({ ...scale, x: v }),
      yScale: scale.y,
      data: data || [],
    };
  }

  return null;
}
