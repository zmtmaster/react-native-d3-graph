import React, { useEffect, useState, useMemo, useContext, memo } from 'react';
import { PanResponder } from 'react-native';
import { Svg, G } from 'react-native-svg';
import { zoomIdentity } from 'd3';

import {
  AXIS_HEIGHT,
  PADDING,
  maxHeight,
  maxWidth,
} from '../../constants/internals';
import { normalize } from '../../utility';
import { GraphContext } from '../../contexts';
import Column from '../column';
import Average from '../average';
import { RightAxis, BottomAxis } from '../axis';

import { Text, TextContainer } from './graph.style';

const GraphContent = memo(function () {
  const { xScale, yScale, setXScale, data } = useContext(GraphContext);

  const [barsData, setBarsData] = useState([]);
  const [selected, setSelected] = useState();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, d) => {
      const { dx, dy } = d;
      const transform = zoomIdentity.translate(dx, dy);
      const updatedXScale = transform.rescaleX(xScale);
      const barsCalculations = normalize(data, updatedXScale, yScale);

      setXScale(updatedXScale);
      setBarsData(barsCalculations);
    },
  });

  const columns = useMemo(
    () =>
      barsData.map((barData, i) => (
        <Column {...barData} key={i} onClick={() => setSelected(data[i])} />
      )),
    [barsData, setSelected, data]
  );

  useEffect(() => {
    if (xScale && yScale) {
      const barsCalculations = normalize(data, xScale, yScale);

      setBarsData(barsCalculations);
    }
  }, [data, xScale, yScale]);

  return (
    <>
      <Svg
        width={maxWidth}
        height={maxHeight + PADDING + AXIS_HEIGHT}
        {...panResponder.panHandlers}
      >
        <G>
          {columns}
          <Average xScale={xScale} yScale={yScale} data={data} />
        </G>
        <G transform={`translate(0, ${maxHeight - PADDING})`}>
          <BottomAxis scale={xScale} data={data} />
        </G>
        <G transform={`translate(${15}, 0)`}>
          <RightAxis scale={yScale} data={data} />
        </G>
      </Svg>
      <TextContainer>
        <Text>
          {selected && `Month: ${selected.month}, Value: ${selected.value}`}
        </Text>
      </TextContainer>
    </>
  );
});

export default GraphContent;
