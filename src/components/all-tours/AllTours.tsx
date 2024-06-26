import Button from "../Button";
import Container from "../Container";
import MainTitle from "../MainTitle";
import MotivationMessage from "../MotivationMessage";
import TourCard from "../TourCard";
import PortoTour from "../../assets/city-tour-images/PortoTour.jpg";
import ParisTour from "../../assets/city-tour-images/ParisTour.jpg";
import ParisTour6days from "../../assets/city-tour-images/ParisTour6days.jpg";
import AmsterdamTour from "../../assets/city-tour-images/AmsterdamTour.jpg";

function AllTours() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-8">
        <div>
          <MainTitle
            title=""
            description={() => (
              <p className="barlow-bold text-[48px] text-center">
                We can do anything we want to <br className="hidden md:block" />
                if <span className="text-[#E61C5D]">we stick</span> to it long
                enough.
              </p>
            )}
          />
        </div>
        <MotivationMessage motivationMessage="Do what you can, with what you have, where you are." />
        <Button title="See all tours" type="primary" />
      </div>
      <div className="grid grid-cols-2 gap-6 place-items-center mt-10 md:flex md:flex-row md:gap-3 justify-between md:items-start">
        <TourCard
          cardSize="medium"
          cityImage={PortoTour}
          cityName="Porto, Portugal"
          price={150}
          tripDuration="7 days tour"
        />
        <TourCard
          cardSize="small"
          cityImage={ParisTour}
          cityName="Paris, France"
          price={100}
          tripDuration="5 days tour"
        />
        <TourCard
          cardSize="small"
          cityImage={ParisTour6days}
          cityName="Paris, France"
          price={250}
          tripDuration="6 days tour"
        />
        <TourCard
          cardSize="medium"
          cityImage={AmsterdamTour}
          cityName="Amsterdam, Netherland"
          price={150}
          tripDuration="10 days tour"
        />
      </div>
    </Container>
  );
}

export default AllTours;
