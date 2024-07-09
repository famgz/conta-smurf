import * as React from 'react';
import { SVGProps } from 'react';
const TargetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    viewBox="0 0 31 31"
    overflow="visible"
  >
    <path
      stroke="none"
      fill={props.fill}
      d="M13.95 0v3.208A12.4 12.4 0 0 0 3.209 13.95H0v3.1h3.208A12.4 12.4 0 0 0 13.95 27.791V31h3.1v-3.209A12.4 12.4 0 0 0 27.791 17.05H31v-3.1h-3.209A12.4 12.4 0 0 0 17.05 3.209V0m-3.1 6.324V9.3h3.1V6.34c3.875.635 6.975 3.735 7.626 7.61H21.7v3.1h2.96c-.635 3.875-3.735 6.975-7.61 7.626V21.7h-3.1v2.96c-3.875-.635-6.975-3.735-7.626-7.61H9.3v-3.1H6.34c.635-3.875 3.735-6.975 7.61-7.626Zm1.55 7.626a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Z"
    />
  </svg>
);
export default TargetIcon;
