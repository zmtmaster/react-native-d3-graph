import React, { memo } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useSpring, animated } from 'react-spring';
import { Rect } from 'react-native-svg';

const AnimatedRect = animated(Rect);

function Column({ x, width, y, height, color, onClick }) {
  const animatedHeight = useSpring({
    height,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });
  const [{ fillOpacity }, set] = useSpring(() => ({ fillOpacity: 0.3 }));

  return (
    <TouchableWithoutFeedback
      onPress={onClick}
      onPressIn={() => set({ fillOpacity: 0.7 })}
      onPressOut={() => set({ fillOpacity: 0.3 })}
    >
      <AnimatedRect
        x={x}
        width={width}
        y={y}
        style={animatedHeight}
        height={height}
        fillOpacity={fillOpacity}
        fill={color}
        stroke={color}
        strokeWidth={2}
      />
    </TouchableWithoutFeedback>
  );
}

export default memo(Column);
