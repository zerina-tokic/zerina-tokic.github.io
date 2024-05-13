import { SVGProps } from "react";
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M11.62 5.22 7.817 9.025c-.45.45-1.184.45-1.634 0L2.38 5.221"
    />
    <path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.62 5.22 7.817 9.025c-.45.45-1.184.45-1.634 0L2.38 5.221"
    />
  </svg>
);
export default ArrowDownIcon;
