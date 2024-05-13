import { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={49}
    viewBox="0 0 48 49"
    fill="none"
    {...props}
  >
    <circle cx={24} cy={24.5} r={24} fill="#E61C5D" fillOpacity={0.04} />
    <path
      stroke="#E61C5D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m20.91 32.42 6.52-6.52c.77-.77.77-2.03 0-2.8l-6.52-6.52"
    />
  </svg>
);
export default ArrowRight;
