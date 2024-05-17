interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
  customStyles?: string;
}

const Button = ({ title, type, customStyles }: ButtonProps) => {
  const primaryStyles = "bg-[#E61C5D] text-white barlow-medium text-[20px]";
  const secondaryStyles = "barlow-regular text-[#808080] text-[20px]";

  const className = type === "primary" ? primaryStyles : secondaryStyles;

  const combinedStyles = customStyles
    ? `${className} ${customStyles}`
    : className;
  return (
    <button
      className={`${combinedStyles} px-9 rounded-[45px] py-5 cursor-pointer`}
    >
      {title}
    </button>
  );
};


export default Button;
