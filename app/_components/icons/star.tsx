import * as React from 'react';
import { SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill=""
    viewBox="0 0 21 20"
    {...props}
  >
    <path
      fill=""
      d="M19.994 7.234a1 1 0 0 0-.86-.67l-5.69-.83-2.55-5.17a1 1 0 0 0-1.8 0l-2.55 5.16-5.69.84a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.45 1.07l5.12-2.67 5.1 2.68c.14.08.299.12.46.12a1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4a1 1 0 0 0 .32-1.02Zm-6.15 4a1 1 0 0 0-.29.89l.72 4.19-3.76-2a1 1 0 0 0-.94 0l-3.76 2 .72-4.19a1 1 0 0 0-.29-.89l-3-3 4.21-.61a1 1 0 0 0 .76-.55l1.78-3.81 1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10.014}
        x2={10.014}
        y1={0}
        y2={19.124}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB800" />
        <stop offset={1} stopColor="#DA8300" />
      </linearGradient>
    </defs>
  </svg>
);
export default StarIcon;
