export default ({
  width,
  height,
  backgroundColor,
  x,
  y,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <rect width={width} height={height} fill={backgroundColor} x={x} y={y} />
    </g>
  );
};
