import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import houseplan  from "../../assets/houseplans1.jpg"
import houseplan2  from "../../assets/houseplans2.jpg"
 import "../carousel/carousel.css"
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardSearch from '../CardSearch/CardSearch';


function Carousel() {
    const carouselimage={
        height: '500px'
    }
    return (
        <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={carouselimage} className=' justify-content-center align-content-center text-center mt-4 image-box'>
            <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan2} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
        <SwiperSlide style={carouselimage}  className=' justify-content-center align-content-center text-center mt-5 image-box'>
        <img src={houseplan} alt='houseplanImage' className='img-fluid home-plan' />
        </SwiperSlide>
      </Swiper>
      <CardSearch/>
        </div>
    )
}

export default Carousel
