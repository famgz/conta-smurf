import SvgDefs from '@/app/_components/icons/svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const RocketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    overflow="visible"
  >
    <SvgDefs />
    <g
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      fill="none"
    >
      <path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3" />
      <path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    </g>
  </svg>
);
export default RocketIcon;
