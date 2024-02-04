import { Link } from "react-router-dom";

const ApplyImg = () => {
    return (
        <section className="my-8 relative">
            <Link>
                <img src="//demo-uminex.myshopify.com/cdn/shop/files/img_1_4.png?v=1673237940&width=3840" className="my-8" alt="" />
                <div className="absolute font-semibold top-1/2 -translate-y-1/2 text-white ml-4">
                    <p>APPLY CARD TODAY AND <span className="text-amber-400">GET DISCOUNT</span></p>
                    <p className="text-sm font-normal text-gray-300">In rewards on your first day of purchase when you are approved for the card.</p>
                </div>
            </Link>
        </section>
    );
};

export default ApplyImg;