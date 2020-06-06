import { range } from 'lodash';
import React, { useEffect, useMemo, useState, memo } from 'react';
import { Text, Path } from 'react-native-svg';

function AxisRight({ scale }) {
  const data = useMemo(() => range(0, 100, 10), []);
  const [points, setPoints] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (scale) {
      setPoints(data.map(scale));
    }
  }, [scale, data]);

  useEffect(() => {
    const curveOffsetTop = 0;
    const innerTick = 0;
    const outerTick = 15;

    const $path = points.reduce((accumulator, current) => {
      return `${accumulator}V${current}h${outerTick}h-${outerTick}h-${innerTick}h${innerTick}`;
    }, `M0,${curveOffsetTop}`);

    setPath($path);
  }, [points]);

  return (
    <>
      <Path d={path} strokeWidth={3} stroke="#fff" />
      {points.map((e, i) => {
        return (
          <Text
            x={30}
            y={e}
            fill="#fff"
            alignment="center"
            textAnchor="middle"
            key={`xLabel${i}`}
          >
            {data[i]}
          </Text>
        );
      })}
    </>
  );
}

export default memo(AxisRight);
