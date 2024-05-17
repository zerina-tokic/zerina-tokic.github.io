import RatingIcon from "../assets/react-icons/RatingIcon";

interface CityCardProps {
  cityImage: string;
  tripDescription: string;
  cityName: string;
  rating: number;
  price: number;
  tripDuration: string;
}

function CityCard({
  cityImage,
  tripDescription,
  cityName,
  rating,
  price,
  tripDuration,
}: CityCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl">
      <img src={cityImage} alt="Tour" className="w-full rounded-t-2xl" />
      <div className="px-5 py-5">
        <p className="description barlow-bold text-xl text-[#112B3C]">
          {tripDescription}
        </p>
        <p className="city text-xs barlow-regular text-nowrap my-2 text-[#112B3C]">
          {cityName}
        </p>
        <div className="bg-yellow-50 rounded-2xl absolute">
          <p className="rating text-[#FFBD39] text-sm barlow-medium flex flex-row items-center gap-1 px-[2px]">
            <RatingIcon />
            {rating}
          </p>
        </div>
        <div className="flex items-center justify-between flex-row">
          <p className="price relative text-[#E61C5D] barlow-bold text-xl my-2 pt-3">
            ${price}
          </p>
          <p className="barlow-medium text-xs text-[#808080] pt-3">
            {tripDuration}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CityCard;
