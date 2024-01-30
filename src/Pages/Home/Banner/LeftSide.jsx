import './banner.css'

const LeftSide = () => {
    const featuredProducts = [
        {
            name: 'PS5 Gamepad',
            speciality: 'Available in colors',
            image: '/src/assets/gamepad.jpeg'
        },
        {
            name: 'Airpod',
            speciality: '10% discount',
            image: '/src/assets/airpod.jpeg'
        },
        {
            name: 'Gaming Headphone',
            speciality: '7 days return',
            image: '/src/assets/head2.jpg'
        },
    ]

    return (
        <div className="flex flex-col gap-3">
            {featuredProducts.map((obj, idx) => <div
                key={idx}
                className="banner-card overflow-hidden shadow-md rounded-md relative bg-back p-2 "
            >
                <img src={obj.image} alt={obj.name} className="w-40 h-40 object-contain ml-auto" />
                <div className="absolute top-1/2 space-y-2 -translate-y-1/2">
                    <p className="text-xl font-medium">{obj.name}</p>
                    <p className="text-mid text-sm">{obj.speciality}</p>
                    <button className="text-prim">Details</button>
                </div>
            </div>)}
        </div>
    );
};

export default LeftSide;