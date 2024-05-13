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
      <img src={cityImage} alt="Tour" className="rounded-t-2xl" />
      <div className="px-5 py-5">
        <p className="description barlow-bold text-xl text-[#112B3C]">
          {tripDescription}
        </p>
        <p className="city text-xs barlow-regular text-nowrap my-2 text-[#112B3C]">
          {cityName}
        </p>
        <div className="flex items-center bg-yellow-50 rounded-2xl justify-center mr-64 gap-1">
          <RatingIcon />
          <p className="rating text-[#FFBD39] text-sm font-semibold">
            {rating}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="price text-[#E61C5D] barlow-bold text-xl my-2">
            ${price}
          </p>
          <p className="barlow-medium text-xs text-[#808080]">{tripDuration}</p>
        </div>
      </div>
    </div>
  );
}
export default CityCard;
