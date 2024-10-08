import SvgDefs from '@/app/_components/icons/_svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const SwordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={39}
    viewBox="0 0 21 39"
    overflow="visible"
  >
    <SvgDefs />
    <path
      fill={props.fill}
      stroke="none"
      d="M9.686.82 3.125 7.38a1.16 1.16 0 0 0-.33.97l1.97 15.093-1.98.002a2.319 2.319 0 0 0-2.32 2.32v2.604a2.32 2.32 0 0 0 2.32 2.32h4.101v5.741a2.32 2.32 0 0 0 2.32 2.32h2.602a2.32 2.32 0 0 0 2.319-2.32V30.69h4.1a2.319 2.319 0 0 0 2.322-2.321l-.002-2.603a2.32 2.32 0 0 0-2.32-2.32h-1.976L18.22 8.353a1.16 1.16 0 0 0-.332-.971L11.326.82a1.16 1.16 0 0 0-1.64 0Zm2.122 35.607-2.601.001v-5.741h2.6v5.74Zm6.418-8.06-15.438.002-.002-2.605h15.441v2.604Zm-2.382-19.75L13.91 23.446h-2.243V13.123a1.16 1.16 0 1 0-2.32 0l-.001 10.322-2.242-.001L5.169 8.618l5.337-5.338 5.338 5.338Z"
    />
  </svg>
);
export default SwordIcon;
