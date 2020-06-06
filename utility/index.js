import { maxHeight, PADDING } from '../constants/internals';

export function normalize(barsArray, xScale, yScale) {
  return barsArray.map(({ value, month, color }) => ({
    x: xScale(month),
    width: 30,
    height: maxHeight - PADDING - yScale(value),
    y: yScale(value),
    color,
  }));
}
