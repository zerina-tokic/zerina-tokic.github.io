import Container from "../Container";
import LocationAndDatePicker from "../LocationAndDatePicker";
import MainImageOfPage from "../MainImageOfPage";
import MainTitle from "../MainTitle";
import MotivationMessage from "../MotivationMessage";
import homeImage from "../../assets/main-images-of-page/home-image.png";

function Home() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between gap-x-28 items-center">
        <div className="flex flex-col flex-[1.2] gap-8 order-last md:order-first">
          <div>
            <MainTitle
              title=""
              description={() => (
                <p className="barlow-bold text-[64px]">
                  Dare to live <span className="text-[#E61C5D]">the life</span>{" "}
                  you've always <span className="text-[#F2C715]">wanted</span>.
                </p>
              )}
            />
          </div>
          <div>
            <MotivationMessage motivationMessage="Life is short and the world is wide. So, better get started." />
          </div>
          <LocationAndDatePicker />
        </div>
        <div className="flex-1">
          <MainImageOfPage image={homeImage} />
        </div>
      </div>
    </Container>
  );
}

export default Home;
