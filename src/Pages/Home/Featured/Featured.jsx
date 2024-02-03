import Card from "@/components/custom/Card";
import Heading from "@/components/custom/Heading";
import { FaChevronRight } from "react-icons/fa";


const Featured = () => {
    return (
        <section >
            <div className="flex justify-between bg-back my-4 py-4 px-3 shadow-md rounded-md">
                <Heading first='Featured' next='Products'></Heading>
                <button className="text-mid flex gap-2 items-center p-1">View all products <FaChevronRight className="mt-1"></FaChevronRight></button>
            </div>

            <div>
                <Card></Card>
            </div>
        </section>
    );
};

export default Featured;