import Container from "../Container";
import MainTitle from "../MainTitle";

function TourPackages() {
  return (
    <div className="">
      <Container>
        <div className="">
          <MainTitle
            title="tour packages"
            description={() => (
              <p className="">
                The amazing places around
                <span className="text-[#E61C5D]"> the world</span>
              </p>
            )}
          />
        </div>
      </Container>
    </div>
  );
}

export default TourPackages;
