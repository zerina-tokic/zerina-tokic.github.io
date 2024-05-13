interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
}

const Button = ({ title, type }: ButtonProps) => {
  const primaryStyles = "bg-[#E61C5D] text-white barlow-medium text-[20px]";
  const secondaryStyles = "barlow-regular text-[#808080] text-[20px]";

  const className = type === "primary" ? primaryStyles : secondaryStyles;
  return (
    <button
      className={`${className} px-9 rounded-[45px] py-5 px-18px`}
    >
      {title}
    </button>
  );
};

export default Button;
