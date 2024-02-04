import Card from "@/components/custom/Card";
import Heading from "@/components/custom/Heading";
import { FaChevronRight } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { GrNext, GrPrevious } from "react-icons/gr";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Featured = () => {
    let swiperRef;

    return (
        <section >
            <div className="flex justify-between bg-back mt-6 mb-2 py-4 px-3 shadow- rounded-md">
                <Heading first='Featured' next='Products'></Heading>
                <button className="text-mid flex gap-2 items-center p-1">View all products <FaChevronRight className="mt-1"></FaChevronRight></button>
            </div>

            <div className="relative">
                <Swiper
                    modules={[A11y]}
                    spaceBetween={9}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef = swiper}
                    className='h-full'
                >
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>

                </Swiper>

                <button className='left-0 -ml-4 h-8 w-8 top-1/2 -translate-y-1/2 z-10 absolute text-center rounded-full bg-back drop-shadow-md' onClick={() => swiperRef.slidePrev()}><GrPrevious className='mx-auto'></GrPrevious></button>
                <button className='right-0 -mr-4 h-8 w-8 top-1/2 -translate-y-1/2 z-10 absolute text-center rounded-full bg-back drop-shadow-md' onClick={() => swiperRef.slideNext()}><GrNext className='mx-auto'></GrNext></button>

            </div>
        </section>
    );
};

export default Featured;