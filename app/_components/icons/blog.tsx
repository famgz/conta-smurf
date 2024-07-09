import SvgDefs from '@/app/_components/icons/_svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 30 30"
  >
    <SvgDefs />
    <path
      fill={props.fill}
      stroke="none"
      d="M22.667 3.333a4 4 0 0 1 4 4v15.334a4 4 0 0 1-4 4H7.333a4 4 0 0 1-4-4V7.333a4 4 0 0 1 4-4h15.334ZM30 4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V4Zm-6.667 18.5c0 .46-.373.833-.833.833h-15a.833.833 0 1 1 0-1.666h15c.46 0 .833.373.833.833Zm0-3.333c0 .46-.373.833-.833.833h-15a.833.833 0 1 1 0-1.667h15c.46 0 .833.373.833.834Zm0-8.167a4 4 0 0 1-4 4h-8.666a4 4 0 0 1-4-4v-.333a4 4 0 0 1 4-4h8.666a4 4 0 0 1 4 4V11Z"
    />
  </svg>
);
export default BlogIcon;
