import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules'

const homeCarousel = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className='hidden sm:block w-full'
      >
        <SwiperSlide>
            <img className='object-cover w-full h-full' src="https://www.tlu.edu.vn/Portals/0/Thumbnails/daihoidangthumb.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='object-cover w-full h-full' src="https://www.tlu.edu.vn/Portals/0/Thumbnails/bannertiensithumb.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='object-cover w-full h-full' src="https://www.tlu.edu.vn/Portals/0/Thumbnails/web1.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    )
  }
  
  export default homeCarousel