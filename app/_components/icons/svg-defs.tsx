const SvgDefs = () => (
  <defs>
    <linearGradient
      id="svg-linear-gradient"
      x1="50%"
      y1="0%"
      x2="50%"
      y2="100%"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#FFB800" />
      <stop offset="100%" stopColor="#DA8300" />
    </linearGradient>

    <filter id="f2" width="120" height="120">
      <feOffset in="SourceGraphic" dx="20" dy="20" />
      <feGaussianBlur stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" />
    </filter>
  </defs>
);

export default SvgDefs;
