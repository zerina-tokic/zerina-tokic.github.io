interface MainTitleProps {
  title: string;
  description: () => React.ReactNode;
}

const MainTitle = ({ title, description }: MainTitleProps) => {
  return (
    <div className="flex flex-col">
      <div className="title">
        <h2 className="text-[#E61C5D] uppercase barlow-bold tracking-wider text-nowrap">
          {title}
        </h2>
      </div>
      <div className="main-description text-[48px] barlow-extrabold leading-[57px] text-[#112B3C]">
        {description()}
      </div>
    </div>
  );
};

export default MainTitle;
