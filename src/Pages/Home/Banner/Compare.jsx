import { FaSearch } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const Compare = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col gap-4 h-full">
            <div className="text-center bg-back p-4 rounded-md space-y-4 shadow-md">
                <h2 className="font-semibold text-xl">Compare two products</h2>
                <p className="text-mid">Choose two products to compare</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="relative">
                        <input type="text" placeholder="Product 1" className="border-2 border-mid w-full p-4 outline-none focus:border-prim shadow-sm rounded-sm" />
                        <FaSearch className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-xl text-mid"></FaSearch>
                    </label>

                    <label className="relative">
                        <input type="text" placeholder="Product 2" className="border-2 border-mid w-full p-4 outline-none focus:border-prim shadow-sm rounded-sm" />
                        <FaSearch className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-xl text-mid"></FaSearch>
                    </label>
                    <button className="w-full block p-3 border-2 border-mid hover:bg-low ">View comparison</button>
                </form>
            </div>

            <div className="p-2 text-xl bg-back flex-grow shadow-md flex items-center gap-2 justify-center rounded-md">
                <RiCustomerService2Fill className="text-3xl"></RiCustomerService2Fill>
                <span>Contact Hotline</span>
            </div>

            <div className="">
                <img src='/src/assets/lapFinder.webp' className="rounded-md" alt="" />
            </div>
        </div>

    );
};

export default Compare;