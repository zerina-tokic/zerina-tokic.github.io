import Container from "../Container";
import MainImageOfPage from "../MainImageOfPage";
import aboutImage from "../../assets/main-images-of-page/about-image.png";
import MainTitle from "../MainTitle";
import MotivationMessage from "../MotivationMessage";
import InsightList from "../InsightList";

function AboutUs() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between gap-x-28 items-center">
        <div className="flex-1">
          <MainImageOfPage image={aboutImage} />
        </div>
        <div className="flex-[1.2] gap-6 flex flex-col">
          <MainTitle
            title="about us"
            description={() => (
              <p className="">
                Our tour plan is to fulfil your
                <span className="text-[#E61C5D]"> dream wish</span>
              </p>
            )}
          />
          <div className="pb-6">
            <MotivationMessage motivationMessage="Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication." />
          </div>
          <InsightList />
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
