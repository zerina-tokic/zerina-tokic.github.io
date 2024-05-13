import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Container from "./Container";
import MainTitle from "./MainTitle";
import ArrowLeft from "../assets/react-icons/ArrowLeft";
import ArrowRight from "../assets/react-icons/ArrowRight";
import TestimonialCard from "./TestimonialCard";
import AuthorEleanorPena from "../assets/author-images/AuthorEleanorPena.jpg";
import AuthorTheresaWebb from "../assets/author-images/AuthorTheresaWebb.jpg";
import AuthorAnnetteBlack from "../assets/author-images/AuthorAnnetteBlack.jpg";

function TestimonialSlider() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="mx-64 text-center">
          <MainTitle
            title="testimonial"
            description={() => (
              <p className="barlow-bold text-[48px]">
                Satisfied <span className="text-[#E61C5D]">travellers</span>{" "}
                around the world
              </p>
            )}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <button className="button" onClick={previous}>
            <ArrowLeft />
          </button>
        </div>
        <div className="min-w-0">
          <Slider ref={sliderRef} {...settings}>
            <div className="p-5">
              <TestimonialCard
                author={AuthorEleanorPena}
                authorsName="Eleanor Pena"
                authorsProfession="UI/UX Designer"
                rating={5}
                description="Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers."
              />
            </div>
            <div className="p-5">
              <TestimonialCard
                author={AuthorTheresaWebb}
                authorsName="Theresa Webb"
                authorsProfession="Vlogger"
                rating={5}
                description="In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product."
              />
            </div>
            <div className="p-5">
              <TestimonialCard
                author={AuthorAnnetteBlack}
                authorsName="Annette Black"
                authorsProfession="Doctor"
                rating={5}
                description="Testimonials work because they aren't strong sales pitches, they come across in an unbiased voice and establish trust."
              />
            </div>
            <div className="p-5">
              <TestimonialCard
                author={AuthorAnnetteBlack}
                authorsName="Annette Black"
                authorsProfession="Doctor"
                rating={5}
                description="Testimonials work because they aren't strong sales pitches, they come across in an unbiased voice and establish trust."
              />
            </div>
            <div className="p-5">
              <TestimonialCard
                author={AuthorAnnetteBlack}
                authorsName="Annette Black"
                authorsProfession="Doctor"
                rating={5}
                description="Testimonials work because they aren't strong sales pitches, they come across in an unbiased voice and establish trust."
              />
            </div>
          </Slider>
        </div>
        <div>
          <button className="button" onClick={next}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TestimonialSlider;
