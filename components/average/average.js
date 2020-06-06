import { range } from 'lodash';
import { pluck } from 'lodash/fp';
import React, { memo, useState, useEffect, useMemo } from 'react';
import { line as d3Line, median as d3Median } from 'd3';
import { Path } from 'react-native-svg';

const Average = memo(({ data, xScale, yScale }) => {
  const [meanPath, setMeanPath] = useState();
  const $overflow = useMemo(() => range(-30, 30), []);

  useEffect(() => {
    if (xScale && yScale && data) {
      const mean = d3Median(pluck('value', data));
      const line = d3Line()
        .x((d) => xScale(d))
        .y(() => yScale(mean));

      setMeanPath(line($overflow));
    }
  }, [xScale, yScale, data, $overflow]);
  return <Path d={meanPath} strokeWidth={4} stroke="#030303" />;
});

export default Average;
