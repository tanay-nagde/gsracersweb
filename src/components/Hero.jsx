import React from "react";
import HERO_IMG_PATH from "../assets/hero2.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    // Hero Section

    <div className="herosection  py-10 bg-blue-950/10 rounded-2xl grid lg:grid-cols-2 lg:h-[75vh] grid-cols-1 gap-8 md:gap-1 lg:justify-items-center w-full overflow-hidden">
      <div className="hero-right w-full h-full   justify-items-center md:order-1 content-center gap-3 grid grid-cols-1 p-2 ">
        <div className="pb-1 lg:  font-trinos">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="gradient-text text-transparent text-4xl py-2 animate-gradienthero lg:text-7xl "
          >
            TEAM
          </motion.h1>

          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="gradient-text text-transparent text-3xl animate-gradienthero  lg:text-6xl "
          >
            G.S.RACERS
          </motion.h1>
        </div>

        <div>
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className=" p-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            illum, enim magni accusantium nostrum rem quidem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Earum repudiandae cumque
            accusantium tempora illo rem expedita explicabo fugit similique?
            Ratione.
          </motion.p>
        </div>
      </div>
      <div className="hero-left rounded-lg  md:order-2 w-full h-full flex justify-center items-center object-cover justify-items-center content-center p-2 xl:pl-10 ">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="  w-full h-full  overflow-hidden"
        >
          <Slider {...settings}>
            <img src={HERO_IMG_PATH} alt="HERO" className=" rounded-2xl  md:w-[40rem] px-2 md:h-[32rem] " />
            <img src={HERO_IMG_PATH} alt="HERO" className=" rounded-2xl  md:w-[40rem] px-2 md:h-[32rem] " />
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
