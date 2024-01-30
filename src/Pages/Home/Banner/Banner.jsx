import Compare from "./Compare";
import LeftSide from "./LeftSide";
import Mid from "./Mid";

const Banner = () => {
  return (
    <section className="grid grid-cols-12 gap-3 grid-rows-12 mt-2">
      <div className="col-span-3 row-span-12" >
        <LeftSide></LeftSide>
      </div>
      <div className="col-span-6 row-span-12">
        <Mid></Mid>
      </div>
      <div className="brr col-span-3 row-span-12">
        <Compare></Compare>
      </div>
    </section>
  );
};

export default Banner;