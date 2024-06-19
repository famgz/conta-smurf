import * as React from 'react';
import { SVGProps } from 'react';
const NotificationBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={69}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="m30.5 10 21.218 12.25v24.5L30.5 59 9.282 46.75v-24.5L30.5 10Z"
      />
      <path
        stroke="url(#c)"
        d="M9.782 22.539 30.5 10.577 51.218 22.54V46.46L30.5 58.423 9.782 46.46V22.54Z"
      />
    </g>
    <path
      fill="url(#d)"
      d="M30.503 47.081c.783 0 1.54-.28 2.128-.786a3.124 3.124 0 0 0 1.064-1.966c.027-.215-.156-.393-.378-.393h-5.629c-.221 0-.405.178-.377.393.097.76.476 1.46 1.064 1.966a3.258 3.258 0 0 0 2.128.786Zm-8.04-17.299c0-2.085.846-4.085 2.354-5.56a8.133 8.133 0 0 1 5.686-2.303c2.132 0 4.177.828 5.685 2.303a7.776 7.776 0 0 1 2.355 5.56v4.635c0 .08.023.152.068.218l2.738 4.018a2.346 2.346 0 0 1 .118 2.449c-.208.38-.518.699-.896.92-.379.223-.811.34-1.253.341H21.687a2.48 2.48 0 0 1-1.256-.337c-.38-.222-.69-.54-.9-.922a2.34 2.34 0 0 1 .125-2.452l2.739-4.017a.403.403 0 0 0 .067-.218v-4.635Zm8.04-5.504c-1.493 0-2.925.58-3.98 1.612a5.444 5.444 0 0 0-1.649 3.892v4.635c0 .544-.164 1.074-.473 1.525l-2.738 4.02-.005.015.002.01c0 .003.002.006.006.01l.01.006.01.001h17.632l.011-.001.01-.007.007-.009.001-.011-.005-.016-2.738-4.016a2.71 2.71 0 0 1-.473-1.526v-4.636c0-1.46-.593-2.86-1.649-3.892a5.693 5.693 0 0 0-3.98-1.612Z"
    />
    <g filter="url(#e)">
      <circle cx={46} cy={53} r={9} fill="url(#f)" />
      <path
        fill="#fff"
        d="m41.27 54.355 3.33-6.99h2.88l-3.42 6.99h-2.79Zm0 1.47v-1.47l.78-.765h7.86v2.235h-8.64ZM46.265 58v-6.405h2.625V58h-2.625Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={30.5}
        x2={53.014}
        y1={10}
        y2={75.554}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F90" />
        <stop offset={0.91} stopColor="#E4E817" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={72.878}
        x2={30.5}
        y1={-5.23}
        y2={59}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0094FF" />
        <stop offset={1} stopColor="#00FFC2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={50.365}
        x2={29.176}
        y1={8.676}
        y2={33.838}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFF0" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={46}
        x2={46}
        y1={44}
        y2={62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#850000" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <filter
        id="a"
        width={60.836}
        height={67.4}
        x={0.082}
        y={0.8}
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
        <feGaussianBlur stdDeviation={4.6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.379167 0 0 0 0 0.81375 0 0 0 0 1 0 0 0 0.56 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_42_2291" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_42_2291"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={5} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.441667 0 0 0 0 0.8995 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_42_2291" />
      </filter>
      <filter
        id="e"
        width={26}
        height={26}
        x={33}
        y={40}
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
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.78 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_42_2291" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_42_2291"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default NotificationBell;
