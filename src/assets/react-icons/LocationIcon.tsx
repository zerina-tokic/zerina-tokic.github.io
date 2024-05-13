import { SVGProps } from "react";
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#E61C5D"
      strokeWidth={1.5}
      d="M1.318 6.783c1.806-7.939 13.567-7.93 15.364.009 1.054 4.656-1.843 8.598-4.382 11.036a4.76 4.76 0 0 1-6.61 0C3.16 15.39.265 11.44 1.319 6.783Z"
    />
  </svg>
);
export default LocationIcon;
