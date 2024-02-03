import Banner from "./Banner/Banner";
import DummySection from "./DummySection";
import Featured from "./Featured/Featured";


const Home = () => {
  return (
    <div className="cont">
      <Banner></Banner>
      <DummySection></DummySection>
      <Featured></Featured>
    </div>
  );
};

export default Home;