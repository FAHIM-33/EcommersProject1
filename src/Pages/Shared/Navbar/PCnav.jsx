import { IoPersonCircleOutline, IoCallOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Searchbar from './Searchbar'
import { Separator } from "@/components/ui/separator"


const PCnav = () => {
    return (
        <div className="py-1 hidden lg:block">

            {/* Layer 1 */}
            <div className="navLayer1 text-xs py-1 border-b-2 border-low">
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
                <div className="cont grid grid-cols-12 min-h-fit  gap-2 items-center lg:px-1 2xl:px-0 justify-start">
                    {/* <p className="text-4xl  font-semibold col-span-3">
                        BORO<span className="text-prim    ">LOX</span>
                    </p> */}

                    <p className="text-4xl  font-semibold col-span-3 bg-gradient-to-r from-high via-prim to-lime-400 bg-clip-text text-transparent">BOROLOX</p>

                    <div className="col-span-6 ">
                        <Searchbar></Searchbar>
                    </div>

                    <div className="flex gap-3 h-full items-center justify-end  col-span-3 ">
                        <div className="flex items-center gap-2 ">
                            <img src="https://i.ibb.co/TryRk55/boy1.png" alt="Profile pic" className="w-10" />
                            <p className="whitespace-pre-line leading-4">Some <br></br>Borolox</p>
                        </div>
                        {/* <div className="h-full bg-low w-px"></div> */}
                      <Separator orientation='vertical'></Separator>
                        <div title="Wishlist">
                            <FaRegHeart className="text-3xl"></FaRegHeart>
                        </div>
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