interface InsightItemProps {
  title: string;
  smallDescription: string;
}

const InsightItem = ({ title, smallDescription }: InsightItemProps) => {
  return (
    <div className="flex-col">
      <div className="text-[40px] leading-[48px] barlow-bold text-[#E61C5D]">
        {title}
      </div>
      <div className="barlow-regular text-[17px] leading-5 text-[#808080] capitalize mr-1">
        {smallDescription}
      </div>
    </div>
  );
};

export default InsightItem;
