import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { doctor1, doctor2, doctor3 } from '../../assects';
import { Box, Typography } from '@mui/material';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Specialist = () => {
  const specialists = [
    { src: doctor1, name: "Dr. Ahmad Khan", specialization: "Neurologist" },
    { src: doctor2, name: "Dr. Heena Sachdeva", specialization: "Orthopedics" },
    { src: doctor3, name: "Dr. Ankur Sharma", specialization: "Medicine" },
    { src: doctor1, name: "Dr. Ahmad Khan", specialization: "Neurologist" },
    { src: doctor2, name: "Dr. Heena Sachdeva", specialization: "Orthopedics" },
    { src: doctor3, name: "Dr. Ankur Sharma", specialization: "Medicine" },
    { src: doctor1, name: "Dr. Ahmad Khan", specialization: "Neurologist" },
    { src: doctor2, name: "Dr. Heena Sachdeva", specialization: "Orthopedics" },
    { src: doctor3, name: "Dr. Ankur Sharma", specialization: "Medicine" },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const paginationRef = useRef(null); 


  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Box sx={{ mt: 10 }}>

<Typography variant="h2" sx={{textAlign:"center" , mb:7}} color="#1B3C74">
        Our Medical Specialist
        </Typography>
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
    //    onAutoplayTimeLeft={onAutoplayTimeLeft}
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

  
        {specialists.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.name} />
              <Typography color="#1B3C74" variant="h5" sx={{pt:5}}>{item.name}</Typography>
              <Typography variant="h6" sx={{pt:2}} color="#2AA7FF">
                {item.specialization}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}

<Box ref={paginationRef} sx={{ textAlign: 'center', mt: 2  }} />

      </Swiper>
    </Box>
  );
};

export default Specialist;