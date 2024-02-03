import Rating from 'react-rating'
import { FaStar, FaRegStar } from "react-icons/fa";

const Card = () => {
    return (
        <div className="brr p-2 w-fit bg-back rounded-md">
            <img src="/src/assets/head2.jpg" alt="" className="w-48 mx-auto" />
            <h3 className='font-medium '>Name of Product none none none none none none</h3>
            <div className='text-mid text-sm items-center flex gap-4'>
                <Rating
                    initialRating={3}
                    readonly
                    fullSymbol={<FaStar></FaStar>}
                    emptySymbol={<FaRegStar></FaRegStar>}
                />
                <p>({20} Review)</p>
            </div>
            <span className='text-xs'>In stock</span>
            <p className='text-xl font-semibold text-prim'>999.00$</p>
            <div className='flex items-center justify-between'>
                <button>Buy now</button>
                <button>Add to cart</button>

            </div>
        </div>
    );
};

export default Card;