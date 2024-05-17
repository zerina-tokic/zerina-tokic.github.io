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
  
  const imageWidth = cardSize === "medium" ? "235px" : "190px";
  const fontSizeCityName = cardSize === "medium" ? "md:text-lg" : "md:text-sm";
  const fontSizePrice = cardSize === "medium" ? "md:text-xl" : "md:text-base";
  const topMarginSize = cardSize === "medium" ? "mt-hidden" : "md:mt-[117px]";

  return (
    <div
      className={`bg-white shadow-lg rounded-2xl py-2 px-2 w-full md:w-auto ${topMarginSize}`}
    >
      <div>
        <img
          src={cityImage}
          alt="Tour"
          className={`rounded-t-2xl object-cover w-full md:w-[${imageWidth}]`}
        />
      </div>
      <div className=" ">
        <p
          className={`city text-lg ${fontSizeCityName} barlow-bold text-[#112B3C] text-nowrap mt-2`}
        >
          {cityName}
        </p>
        <div className="flex items-center gap-5">
          <p
            className={`price text-xl ${fontSizePrice} barlow-bold text-[#E61C5D] my-2`}
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
