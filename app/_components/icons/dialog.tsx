import * as React from 'react';
import { SVGProps } from 'react';

const DialogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill=""
      fillOpacity={0.8}
      d="M0 24V2.4C0 1.74.235 1.175.706.706A2.317 2.317 0 0 1 2.4 0h19.2c.66 0 1.225.235 1.696.706.47.47.705 1.035.704 1.694v14.4c0 .66-.235 1.225-.704 1.696-.47.47-1.035.705-1.696.704H4.8L0 24Zm4.8-9.6h9.6V12H4.8v2.4Zm0-3.6h14.4V8.4H4.8v2.4Zm0-3.6h14.4V4.8H4.8v2.4Z"
    />
  </svg>
);
export default DialogIcon;
