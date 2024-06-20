import * as React from 'react';
import { SVGProps } from 'react';
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="#7B7B7B"
    stroke="#7B7B7B"
    strokeWidth={1}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"
    />
    <circle cx={160} cy={216} r={32} stroke="none" />
    <circle cx={256} cy={216} r={32} stroke="none" />
    <circle cx={352} cy={216} r={32} stroke="none" />
  </svg>
);
export default ChatIcon;
