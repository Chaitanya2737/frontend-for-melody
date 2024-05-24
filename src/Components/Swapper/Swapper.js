import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

import './style.css'; // Ensure this file contains your custom styles

// Import required Swiper modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Box, Container, CssBaseline } from '@mui/material';
import SwapperContent from './SwapperContent';
import { swapper1, swapper2 } from '../../assects'; // Adjust the import path as necessary

const Swapper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const paginationRef = useRef(null); 
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const data = [
    { src: swapper1 },
    { src: swapper2 },
    { src: swapper1 },
    { src: swapper2 },
    { src: swapper2 },
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="1400px" sx={{ backgroundColor: "#fff" , marginTop:4,  marginBottom :6}}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SwapperContent data={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box ref={paginationRef} sx={{ textAlign: 'center', mt: 2  }} />
      </Container>
    </>
  );
};

export default Swapper;
