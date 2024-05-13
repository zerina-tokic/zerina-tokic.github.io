import { SVGProps } from "react";
const DateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      stroke="#E61C5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.333 1.833v2.75M14.667 1.833v2.75M3.208 8.333h15.584M19.25 7.792v7.791c0 2.75-1.375 4.584-4.583 4.584H7.333c-3.208 0-4.583-1.834-4.583-4.584V7.792c0-2.75 1.375-4.584 4.583-4.584h7.334c3.208 0 4.583 1.834 4.583 4.584Z"
    />
    <path
      stroke="#E61C5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.996 12.558h.008M7.603 12.558h.008M7.603 15.308h.008"
    />
  </svg>
);
export default DateIcon;
