import * as React from 'react';
import { SVGProps } from 'react';

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#21232D" d="m.5 0 10.791 11.758L.5 24l34-12.242L.5 0Z" />
    <defs>
      <linearGradient
        id="a"
        x1={17.5}
        x2={17.5}
        y1={0}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#21232D" />
        <stop offset={1} stopColor="#21232D" />
      </linearGradient>
    </defs>
  </svg>
);
export default RightArrow;
