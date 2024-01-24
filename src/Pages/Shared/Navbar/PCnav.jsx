import { IoPersonCircleOutline, IoCallOutline } from "react-icons/io5";
import { FaHeart ,FaRegHeart} from "react-icons/fa";
import Searchbar from './Searchbar'
import { Separator } from "@/components/ui/separator"


const PCnav = () => {
    return (
        <div className="py-1 hidden lg:block">


            <div className="navLayer1 text-xs  border-b-2 border-low pb-1">
                <div className="flex justify-between cont lg:px-1 2xl:px-0">
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
                <div className="cont grid grid-cols-12 gap-2 items-center lg:px-1 2xl:px-0 justify-start">
                    <p className="text-4xl font-semibold col-span-3">
                        BORO<span className="text-prim    ">LOX</span>
                    </p>
                    <div className="col-span-6 ">
                        <Searchbar></Searchbar>
                    </div>

                    <div className="flex gap-3 items-center justify-end  col-span-3 ">
                        <div className="flex items-center gap-2 ">
                            <img src="https://i.ibb.co/TryRk55/boy1.png" alt="Profile pic" className="w-10" />
                            <p className="whitespace-pre-line leading-4">Some <br></br>Borolox</p>
                        </div>
                        <Separator orientation="vertical"/>
                        <div>
                            <FaRegHeart className="text-3xl"></FaRegHeart>
                        </div>
                        <Separator orientation="vertical" />
                        <div>

                        </div>
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