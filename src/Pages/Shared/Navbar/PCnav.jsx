import { IoPersonCircleOutline, IoCallOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart, FaHome } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Searchbar from './Searchbar'
import { Separator } from "@/components/ui/separator"
import Badge from "@/components/custom/Badge";
import { Link } from "react-router-dom";

// for layer 3:
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"




const PCnav = () => {

    let wishlist = 1
    let cartitems = 1
    let categories = [
        { id: 1, name: 'Laptop', brands: ['Dell', 'HP', 'Lenovo', 'Asus'] },
        { id: 2, name: 'Desktop', brands: ['HP', 'Acer', 'Custom Build'] },
        { id: 3, name: 'Android', brands: ['Samsung', 'Xiaomi', 'OnePlus', "Pixel", 'Huawei', 'Realmi', 'Asus'] },
        { id: 4, name: 'iPhone' },
        { id: 5, name: 'Headphone', brands: ['Sony', 'Bose', 'Sennheiser'] },
        { id: 6, name: 'Earbud', brands: ['Apple', 'Samsung', 'Jabra'] },
        { id: 7, name: 'Monitor', brands: ['LG', 'Samsung', 'Dell'] },
        { id: 8, name: 'Smart watch', brands: ['Apple', 'Samsung', 'Fitbit'] },
        { id: 9, name: 'Camera', brands: ['Canon', 'Nikon', 'Sony'] },
        { id: 10, name: 'Watch', brands: ['Rolex', 'Seiko', 'Casio'] },
        { id: 11, name: 'Accessories', brands: ['Belkin', 'Logitech', 'Anker'] },
        { id: 12, name: 'Tablet', brands: ['Apple', 'Samsung', 'Amazon'] },
        { id: 13, name: 'TV', brands: ['Samsung', 'LG', 'Sony'] },
        { id: 14, name: 'Appliance', brands: ['Whirlpool', 'Samsung', 'LG'] }
    ];

    return (
        <div className="pt-1 hidden lg:block">

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
                    <Link to='/' className="text-4xl w-fit font-semibold col-span-3  py-1 pr-2 flex items-center justify-center">
                        <img className="w-10 mr-2" src="/pngwing.com(1).png" /> <p className="bg-gradient-to-r from-high to-prim bg-clip-text text-transparent ">BOROLOX</p>
                    </Link>

                    <div className="col-span-6 ">
                        <Searchbar></Searchbar>
                    </div>

                    <div className="flex gap-3 h-full items-center justify-end  col-span-3 ">
                        <div className="flex items-center gap-2 ">
                            <img src="https://i.ibb.co/TryRk55/boy1.png" alt="Profile pic" className="w-10" />
                            <p className="whitespace-pre-line leading-4">Some <br></br>Borolox</p>
                        </div>

                        <Separator orientation='vertical'></Separator>

                        <div title="Wishlist" className="relative p-2 hover:text-prim duration-200">
                            <FaRegHeart className="text-3xl"></FaRegHeart>
                            {
                                wishlist > 0 &&
                                <Badge>{wishlist}</Badge>
                            }
                        </div>

                        <Separator orientation='vertical'></Separator>

                        <div title="Cart" className="relative p-2 hover:text-prim duration-200">
                            <BsCart3 className="text-3xl"></BsCart3>
                            {
                                cartitems > 0 &&
                                <Badge>{cartitems}</Badge>
                            }
                        </div>
                    </div>


                </div>
            </div>

            {/* Layer 3 */}
            <div className="py-2">
                <div className="cont flex gap-4 font-semibold overflow-auto">
                    <Link to='/' className="hover:text-prim text-2xl"><FaHome></FaHome></Link>
                    <p>&gt;</p>
                    {
                        categories.map((obj, i) => <Link
                            className="hover:text-prim"
                            key={i}>
                            <HoverCard openDelay={0} closeDelay={80}>
                                <HoverCardTrigger>
                                    <p className="whitespace-nowrap">{obj.name}</p>
                                </HoverCardTrigger>
                                <HoverCardContent className='px-0 border-t-2 border-prim border-x-0 border-b-0 rounded-t-none'>
                                    {obj.brands?.map((brandName, i) => <Link
                                        key={i}
                                        to={'/whereTOgo'}
                                        className="block font-medium hover:bg-prim hover:text-white px-4"
                                    >{brandName}</Link>)}
                                </HoverCardContent>
                            </HoverCard>

                        </Link>)
                    }
                </div>
            </div>
        </div >
    );
};

export default PCnav;