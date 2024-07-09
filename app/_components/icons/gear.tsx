import SvgDefs from '@/app/_components/icons/_svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 30 30"
    overflow="visible"
  >
    <SvgDefs />
    <g>
      <path
        fill="none"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1}
        strokeWidth={3}
        d="M12.06 2.4A1.556 1.556 0 0 1 13.608 1h2.784a1.555 1.555 0 0 1 1.548 1.4l.051.518c1.21.299 2.37.778 3.437 1.423l.402-.33a1.556 1.556 0 0 1 2.085.105l1.97 1.97a1.556 1.556 0 0 1 .103 2.084l-.33.404a12.361 12.361 0 0 1 1.424 3.435l.516.051A1.556 1.556 0 0 1 29 13.608v2.784a1.555 1.555 0 0 1-1.4 1.548l-.518.051a12.37 12.37 0 0 1-1.423 3.437l.33.402a1.556 1.556 0 0 1-.105 2.085l-1.97 1.97a1.556 1.556 0 0 1-2.084.103l-.404-.33a12.365 12.365 0 0 1-3.435 1.424l-.051.516A1.556 1.556 0 0 1 16.392 29h-2.784a1.555 1.555 0 0 1-1.548-1.4l-.051-.518a12.369 12.369 0 0 1-3.437-1.423l-.402.33a1.556 1.556 0 0 1-2.085-.105l-1.97-1.97a1.556 1.556 0 0 1-.103-2.085l.33-.405a12.371 12.371 0 0 1-1.424-3.434l-.518-.05A1.556 1.556 0 0 1 1 16.392v-2.784a1.555 1.555 0 0 1 1.4-1.548l.518-.051c.299-1.21.778-2.37 1.423-3.437l-.33-.402a1.556 1.556 0 0 1 .105-2.085l1.97-1.97a1.556 1.556 0 0 1 2.085-.103l.405.33a12.362 12.362 0 0 1 3.434-1.424l.05-.518Z"
      />
      <path
        fill="none"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1}
        strokeWidth={3}
        d="M15 11.111a3.889 3.889 0 1 1 0 7.778 3.889 3.889 0 0 1 0-7.778Z"
      />
    </g>
  </svg>
);
export default GearIcon;
