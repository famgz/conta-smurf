import SvgDefs from '@/app/_components/icons/_svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={34}
    viewBox="0 0 27 34"
    overflow="visible"
  >
    <SvgDefs />
    <g>
      <path
        stroke={props.stroke}
        fill="none"
        strokeWidth={3.5}
        d="M13.5 13.5a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5ZM26 25.031c0 3.883 0 7.032-12.5 7.032S1 28.913 1 25.03 6.597 18 13.5 18 26 21.148 26 25.031Z"
      />
    </g>
  </svg>
);
export default ProfileIcon;
