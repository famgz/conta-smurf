import * as React from 'react';
import { SVGProps } from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="none"
      d="M8 6.983a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8ZM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM8 15.017a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default MenuIcon;
