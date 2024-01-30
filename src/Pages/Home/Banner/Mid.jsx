// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { GrNext, GrPrevious } from "react-icons/gr";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Mid = () => {
    // const swiper = useSwiper();
    let swiperRef;
    // const bannerData= [
    //     {
    //         name: 'Headphone',
    //         speciality: 'Available in colors',
    //         image: '/src/assets/bannerGreen.jpg'
    //     },
    // ]
    // console.log(swiper)
    return (
        <div className="h-full flex flex-col gap-3 banner-mid">
            <div className="h-[66%] shadow-md rounded-md overflow-hidden relative">
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef = swiper}
                    className='h-full'
                >
                    <SwiperSlide>
                        <img src="/src/assets/bannerGreen.jpg" className='h-full object-cover block' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/banner2.jpeg" className='h-full object-cover block' alt="" />
                    </SwiperSlide>

                    <div className='px-2 absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between items-center'>

                        <button className='h-8 w-8 text-center rounded-full bg-back drop-shadow-md' onClick={() => swiperRef.slidePrev()}><GrPrevious className='mx-auto'></GrPrevious></button>
                        <button className='h-8 w-8 text-center rounded-full bg-back drop-shadow-md' onClick={() => swiperRef.slideNext()}><GrNext className='mx-auto'></GrNext></button>
                    </div>
                </Swiper>
            </div>

            {/* Products slider */}
            <div className='shadow-md flex-grow'>
            {/* To do... */}
            </div>
        </div>
    );
};

export default Mid;