import { SVGProps } from "react";
const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path
      fill="#E61C5D"
      d="M15 0H5C2 0 0 2 0 5v6c0 3 2 5 5 5h10c3 0 5-2 5-5V5c0-3-2-5-5-5Zm-3.11 9.03-2.47 1.48c-1 .6-1.82.14-1.82-1.03V6.51c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07Z"
    />
  </svg>
);
export default YouTubeIcon;
