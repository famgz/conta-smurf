import SvgDefs from '@/app/_components/icons/_svg-defs';
import * as React from 'react';
import { SVGProps } from 'react';

const FaqIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={35}
    viewBox="0 0 37 35"
  >
    <SvgDefs />
    <path
      stroke={props.stroke}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24.262 10.158h.013m4.937 0h.013M35 9.804c0 4.31-3.694 7.805-8.25 7.805a8.716 8.716 0 0 1-1.596-.147c-.38-.07-.57-.104-.701-.085-.132.02-.32.118-.693.315a5.416 5.416 0 0 1-3.487.537 4.302 4.302 0 0 0 .898-1.917c.082-.433-.122-.852-.429-1.159a7.56 7.56 0 0 1-2.242-5.35C18.5 5.496 22.194 2 26.75 2S35 5.495 35 9.804ZM11.078 32.999H6.484c-.533 0-1.07-.075-1.56-.282-1.593-.677-2.403-1.573-2.78-2.133a.874.874 0 0 1 .05-1.029c1.848-2.428 6.138-3.893 8.892-3.893 2.752 0 7.036 1.465 8.884 3.893.232.305.264.711.05 1.03-.379.56-1.189 1.455-2.783 2.132a3.999 3.999 0 0 1-1.559.282h-4.6Zm4.593-15.844c0 .595-.12 1.184-.35 1.733a4.527 4.527 0 0 1-.996 1.468c-.426.42-.931.753-1.487.98a4.628 4.628 0 0 1-1.754.342 4.608 4.608 0 0 1-3.238-1.323 4.504 4.504 0 0 1-1.346-3.2c.001-.594.12-1.183.351-1.733.23-.549.569-1.048.995-1.468.425-.42.93-.753 1.487-.98a4.625 4.625 0 0 1 1.753-.343c.601 0 1.197.116 1.753.343.556.227 1.061.56 1.487.98a4.486 4.486 0 0 1 1.345 3.201Z"
    />
  </svg>
);
export default FaqIcon;
