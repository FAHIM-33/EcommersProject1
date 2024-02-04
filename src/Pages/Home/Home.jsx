import ApplyImg from "./ApplyImg";
import Banner from "./Banner/Banner";
import Dummy2 from "./Dummy2";
import DummySection from "./DummySection";
import Featured from "./Featured/Featured";
import Recommended from "./Recommended/Recommended";


const Home = () => {
  return (
    <div className="cont">
      <Banner></Banner>
      <DummySection></DummySection>
      <Featured></Featured>
      <ApplyImg></ApplyImg>
      <Recommended></Recommended>
      <Dummy2></Dummy2>
    </div>
  );
};

export default Home;