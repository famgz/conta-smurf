import * as React from 'react';
import { SVGProps } from 'react';

const ShopBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={43}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M30 12.125h-3.25C26.75 7.575 23.175 4 18.625 4S10.5 7.575 10.5 12.125H7.25A3.26 3.26 0 0 0 4 15.375v19.5a3.26 3.26 0 0 0 3.25 3.25H30a3.26 3.26 0 0 0 3.25-3.25v-19.5a3.26 3.26 0 0 0-3.25-3.25ZM18.625 7.25c2.762 0 4.875 2.113 4.875 4.875h-9.75c0-2.762 2.113-4.875 4.875-4.875ZM30 34.875H7.25v-19.5H30v19.5Zm-11.375-13c-2.762 0-4.875-2.113-4.875-4.875H10.5c0 4.55 3.575 8.125 8.125 8.125S26.75 21.55 26.75 17H23.5c0 2.762-2.113 4.875-4.875 4.875Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={46}
        x2={18.625}
        y1={-14.5}
        y2={38.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A0FFEE" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <filter
        id="a"
        width={37.05}
        height={41.925}
        x={0.1}
        y={0.1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1.95} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.525 0 0 0 0 1 0 0 0 0 0.886 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_90_1448" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_90_1448"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ShopBagIcon;
