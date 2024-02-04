import Rating from 'react-rating'
import { FaStar, FaRegStar, FaCartPlus } from "react-icons/fa";


const Card = () => {
    return (
        <div className="p-3 w-full relative bg-back rounded-md shadow-md ">
            <img src="/src/assets/head2.jpg" alt="" className="w-full h-52 object-contain mx-auto" />
            <h3 className='font-medium '>Name of Product none none none none none none</h3>
            <div className='text-mid text-sm items-center flex gap-4 mt-1'>
                <Rating
                    initialRating={3}
                    readonly
                    fullSymbol={<FaStar className='text-amber-400'></FaStar>}
                    emptySymbol={<FaRegStar></FaRegStar>}
                />
                <p>({20} Review)</p>
            </div>
            <span className='text-xs'>In stock</span>

            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <p className='text-xl font-semibold text-prim'>999.00$</p>
                    <del className='text-mid text-sm'>899.00</del>
                </div>
                <button className='border-2 p-1 border-mid text-mid rounded-md'>
                    <FaCartPlus className='text-xl'></FaCartPlus>
                </button>

            </div>
            <p className='absolute top-3 left-3 text-[0.67rem] text-white bg-red-600 font-semibold rounded-md px-1 py-px '>{20}% discount</p>
        </div>
    );
};

export default Card;