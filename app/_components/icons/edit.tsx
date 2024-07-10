import * as React from 'react';
import { SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#21232D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"
    />
    <path
      stroke="#21232D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 5 3 3m1.385-1.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415Z"
    />
  </svg>
);
export default EditIcon;
