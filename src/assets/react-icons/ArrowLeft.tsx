import { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 32.67a.242.242 0 0 1-.176-.074l-6.52-6.52a2.24 2.24 0 0 1 0-3.152l6.52-6.52a.255.255 0 0 1 .352 0 .254.254 0 0 1 0 .352l-6.52 6.52a1.731 1.731 0 0 0 0 2.448l6.52 6.52a.255.255 0 0 1 .006.347.285.285 0 0 1-.182.079Z"
    />
  </svg>
);
export default ArrowLeft;
