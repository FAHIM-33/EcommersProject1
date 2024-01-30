import Compare from "./Compare";
import LeftSide from "./LeftSide";
import Mid from "./Mid";

const Banner = () => {
  return (
    <section className="mt-2 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSide></LeftSide>

      </div>
      <div className="col-span-6">
        <Mid></Mid>
      </div>
      <div className="col-span-3">

        <Compare></Compare>
      </div>
    </section>
  );
};

export default Banner;