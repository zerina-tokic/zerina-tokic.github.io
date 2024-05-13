import QuoteDownCircle from "../assets/react-icons/QuoteDownCircle";
import RatingIcon from "../assets/react-icons/RatingIcon";

interface CardProps {
  author: string;
  authorsName: string;
  authorsProfession: string;
  rating: number;
  description: string;
}

function TestimonialCard({
  author,
  authorsName,
  authorsProfession,
  rating,
  description,
}: CardProps) {
  const renderStars = (rating: number) => {
    const stars = [];

    const clampedRating = Math.min(5, Math.max(0, rating));

    const fullStars = Math.floor(clampedRating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RatingIcon key={i} />);
    }

    if (clampedRating % 1 !== 0 && clampedRating < 5) {
      stars.push(
        <RatingIcon
          key="partial"
          style={{ width: `${(clampedRating % 1) * 15}px` }}
        />
      );
    }

    return stars;
  };
  return (
    <div className="relative min-h-[350px] rounded-2xl border border-[#FAFAFA] shadow-lg bg-white">
      <div className="absolute top-[-20px] left-60">
        <QuoteDownCircle />
      </div>
      <div className="flex flex-col justify-center items-center mt-9">
        <img src={author} alt="User" className="mb-4" />
        <p className="barlow-bold text-lg text-[#112B3C]">{authorsName}</p>
        <p className="barlow-regular text-sm text-[#112B3C]">
          {authorsProfession}
        </p>
        <div className="mt-1 ">
          <p className="flex gap-1">{renderStars(rating)}</p>
        </div>
        <div className="py-5 px-8">
          <p className="barlow-regular text-sm text-center text-[#112B3C]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;
