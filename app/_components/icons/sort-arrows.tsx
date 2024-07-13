import * as React from 'react';
import { SVGProps } from 'react';
const SortArrowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#F1F5F7"
      strokeLinecap="round"
      strokeWidth={4}
      d="M4 4.924 4.922 7H3.078L4 4.924Z"
    />
    <path
      stroke="#F1F5F7"
      strokeLinecap="round"
      d="M12.5 18.882 8.809 11.5h7.382L12.5 18.882Z"
    />
  </svg>
);
export default SortArrowsIcon;
