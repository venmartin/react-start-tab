import React, { Children } from 'react'
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BgImages from '../components/Images'
import "./BackgroundSelector.css"
import CancelIcon from "@mui/icons-material/Cancel";


const BackgroundSelector = ({ bgSelect }) => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "1300px",
    width: "90%",
    height: '60%',
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <div onClick={handleOpen}>Background Selector</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <span id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </span>
            <span id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </span> */}
            <div className="close-btn">
              <CancelIcon onClick={handleClose} />
            </div>
            <Swiper
                // install Swiper modules
                className='bgSwiper'
                modules={[Navigation, EffectCoverflow, A11y, Pagination]}
                effect={'coverflow'}
                pagination={true}
                centeredSlides={true}
                spaceBetween={1}
                slidesPerView={3}
                coverFlowEffect={{
                  rotate: 150,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                }}
                // navigation={{
                  
                // }}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
              
                {BgImages.map((imgSrc, index) => (
                <SwiperSlide onClick={bgSelect} className='imgSlides'> <img src={imgSrc} key={index} /> </SwiperSlide>

                ))}

              </Swiper>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default BackgroundSelector