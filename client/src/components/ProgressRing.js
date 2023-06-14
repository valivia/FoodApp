const Ring = ({ progress, radius, strokeWidth }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = (circumference * (1 - progress));

  return (
    <svg viewBox="0 0 100 100" style={{display: 'block', margin: 'auto'}}>
      
      <circle
        style={{display: 'block', margin: 'auto'}}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#ccc"
        strokeWidth={strokeWidth}
      />
      <circle
        style={{display: 'block', margin: 'auto'}}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#f00"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference -20}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x={radius}
        y={radius - 8}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="#C8D1C5"
        fontSize={11}
      >
        1200
      </text>
      <text

        x={radius}
        y={radius + 8}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="#C8D1C5"
        fontSize={9}
      >
        kcal
      </text>
    </svg>
  );
};



export default Ring;
