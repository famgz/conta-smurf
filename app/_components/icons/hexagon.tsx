import * as React from 'react';
import { SVGProps } from 'react';

const HexagonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="37"
    height="39"
    viewBox="0 0 37 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_276_3231)">
      <path
        d="M18.5 9L27.5933 14.25V24.75L18.5 30L9.40673 24.75V14.25L18.5 9Z"
        fill="url(#paint0_linear_276_3231)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_276_3231"
        x="0.50625"
        y="0.1"
        width="35.9875"
        height="38.8"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.45" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.679167 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_276_3231"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_276_3231"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_276_3231"
        x1="18.5"
        y1="9"
        x2="18.5"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1CC600" />
        <stop offset="0.495" stopColor="#90FF86" />
        <stop offset="1" stopColor="#76FF94" />
      </linearGradient>
    </defs>
  </svg>
);
export default HexagonIcon;
