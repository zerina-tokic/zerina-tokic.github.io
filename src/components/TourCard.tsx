interface TourCardProps {
  cardSize: "small" | "medium";
  cityImage: string;
  cityName: string;
  price: number;
  tripDuration: string;
}

function TourCard({
  cardSize,
  cityImage,
  cityName,
  price,
  tripDuration,
}: TourCardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl py-2 px-2`}>
      <img src={cityImage} alt="Tour" className="rounded-t-2xl" />
      <div className=" ">
        <p
          className={`city ${
            cardSize === "medium" ? "text-lg" : "text-sm"
          } barlow-bold text-[#112B3C] text-nowrap mt-2`}
        >
          {cityName}
        </p>
        <div className="flex items-center gap-5">
          <p
            className={`price ${
              cardSize === "medium" ? "text-xl" : "text-base"
            } barlow-bold text-[#E61C5D] my-2`}
          >
            ${price}
          </p>
          <p className="barlow-medium text-xs text-[#808080]">{tripDuration}</p>
        </div>
      </div>
    </div>
  );
}
export default TourCard;
