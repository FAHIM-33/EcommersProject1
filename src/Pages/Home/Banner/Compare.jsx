import { FaSearch } from "react-icons/fa";

const Compare = () => {
    return (
        <div className="text-center bg-back px-2 py-4 rounded-md space-y-4">
            <h2 className="font-semibold text-xl">Compare two products</h2>
            <p className="text-mid">Choose two products to compare</p>
            <form className="flex flex-col gap-4">
                <label className="relative">
                    <input type="text" placeholder="Product 1" className="border-2 border-low w-full p-4 outline-none focus:border-prim shadow-sm rounded-sm" />
                    <FaSearch className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-xl text-mid"></FaSearch>
                </label>

                <label className="relative">
                    <input type="text" placeholder="Product 2" className="border-2 border-low w-full p-4 outline-none focus:border-prim shadow-sm rounded-sm" />
                    <FaSearch className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-xl text-mid"></FaSearch>
                </label>
                <button className="w-full block p-3 border-2 border-mid hover:border-prim hover:text-prim">View comparison</button>
            </form>
        </div>


    );
};

export default Compare;