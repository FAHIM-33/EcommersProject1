import { IoPersonCircleOutline, IoCallOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Searchbar from './Searchbar'

const PCnav = () => {
    return (
        <div className="py-1 hidden lg:block">


            <div className="navLayer1 text-xs  border-b-2 border-low pb-1">
                <div className="flex justify-between cont">
                    <p className="flex items-center"><IoCallOutline></IoCallOutline>Call us: <strong>9274556937-5684</strong></p>

                    <ul className="flex gap-1">

                        <li className="flex gap-1 items-center"><IoPersonCircleOutline className="text-lg"></IoPersonCircleOutline>My account</li>

                        <li className="flex gap-1 items-center"><FaHeart></FaHeart>Wishlist</li>
                        <li>USD</li>
                        <li>BD</li>
                    </ul>
                </div>
            </div>

            {/* Layer 2 */}
            <div className="border-b-2 border-low ">
                <div className="cont grid grid-cols-12 gap-2 items-center justify-start">
                    <p className="text-4xl font-semibold col-span-3">
                        GADGET<span className="text-prim">X</span>
                    </p>
                    <div className="col-span-6 ">
                        <Searchbar></Searchbar>
                    </div>

                    <div className="col-span-3 ">
                        
                    </div>


                </div>
            </div>

            {/* Layer 3 */}
            <div>
                Layer 3
            </div>
        </div>
    );
};

export default PCnav;