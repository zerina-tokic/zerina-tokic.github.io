import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Container from "./Container";
import MainTitle from "./MainTitle";
import ArrowLeft from "../assets/react-icons/ArrowLeft";
import ArrowRight from "../assets/react-icons/ArrowRight";
import CityCard from "./CityCard";
import PragueTour from "../assets/city-tour-images/PragueTour.png";
import BeijingTour from "../assets/city-tour-images/BeijingTour.jpg";
import IstanbulTour from "../assets/city-tour-images/IstanbulTour.jpg";

function SimpleSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="justify-between items-center flex flex-row">
        <div className="flex mb-14">
          <MainTitle
            title="tour packages"
            description={() => (
              <p className="barlow-bold text-[48px]">
                The amazing places around <br />
                <span className="text-[#E61C5D]">the world</span>
              </p>
            )}
          />
        </div>
        <div className="flex flex-row gap-3">
          <button className="button" onClick={previous}>
            <ArrowLeft />
          </button>
          <button className="button" onClick={next}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="p-5">
          <CityCard
            cityImage={PragueTour}
            tripDescription="Fall in love among the winding streets and snow-covered"
            cityName="Prague, Czechia"
            rating={4}
            price={200}
            tripDuration="10 days tour"
          />
        </div>
        <div className="p-5">
          <CityCard
            cityImage={BeijingTour}
            tripDescription="History is not about the past but a map of the past"
            cityName="Beijing, China"
            rating={4.9}
            price={450}
            tripDuration="5 days tour"
          />
        </div>
        <div className="p-5">
          <CityCard
            cityImage={IstanbulTour}
            tripDescription="The unique character as a symbol of taste and ostentation"
            cityName="İstanbul, Turkey"
            rating={4.9}
            price={150}
            tripDuration="7 days tour"
          />
        </div>
        <div className="p-5">
          <CityCard
            cityImage={PragueTour}
            tripDescription="Fall in love among the winding streets and snow-covered"
            cityName="Paris, France"
            rating={4.9}
            price={100}
            tripDuration="10 days tour"
          />
        </div>
        <div className="p-5">
          <CityCard
            cityImage={PragueTour}
            tripDescription="Fall in love among the winding streets and snow-covered"
            cityName="Prague, Czechia"
            rating={4}
            price={200}
            tripDuration="10 days tour"
          />
        </div>
        <div className="p-5">
          <CityCard
            cityImage={PragueTour}
            tripDescription="Fall in love among the winding streets and snow-covered"
            cityName="Prague, Czechia"
            rating={4}
            price={200}
            tripDuration="10 days tour"
          />
        </div>
      </Slider>
    </Container>
  );
}

export default SimpleSlider;
