import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import AllTours from "./components/all-tours/AllTours";
import TourSlider from "./components/TourSlider";
import TestimonialSlider from "./components/TestimonialSlider";
import Divider from "./components/Divider";

function App() {
  return (
    <Layout>
      <Divider />
      <Home />
      <Divider />
      <AboutUs />
      <Divider />
      <TourSlider />
      <Divider />
      <TestimonialSlider />
      <Divider />
      <AllTours />
      <Divider />
    </Layout>
  );
}

export default App;
