import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import banner from '../../assets/images/banner111.jpg';
import banner2 from '../../assets/images/banner1.jpg';

const CarouselWithContent = () => {
  console.log(localStorage.getItem('access_key'), localStorage.getItem('refresh_key')) 
  return (
    <Carousel
      className=""
      navigation={false}
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
    >
      <div className="relative h-[500px] w-full">
        <img
          src={banner}
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-[500px] w-full place-items-center">
          <div className="w-full text-center md:w-3/4">
            <Typography
              as={'h3'}
              variant="lead"
              color="white"
              className="mb-16 text-right md:mr-0 mr-10"
            >
              <p className="text-3xl font-bold">
                WE PREPARE 
              </p>

            <p className="text-3xl font-bold">
FRESH FOOD <span className="text-orange-900">VEGIES</span>
              </p> 
             <small className="font-bold">Enjoy Delicious Food</small>
            </Typography>
            <div className="mobile:flex mobile:flex-row flex-col mobile:space-y-0 space-y-3 mobile:mb-0 -mb-10 p-2 justify-between gap-2 text-white bg-[#00000065] md:mx-0 mx-10 md:w-full">
              <div className="text-left">
                <p className="font-bold">RESTAURANT DISH</p>
                <small>Enjoy With Best Dish</small>
              </div>
              <div className="text-left">
                <p className="font-bold">BAKERY ITEMS</p>
                <small>Every Morning Test Better</small>
              </div>
              <div className="text-left">
                <p className="font-bold">FRESH FOOD</p>
                <small>Keep Healthy Life Cycle</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative h-[500px] w-full">
        <img
          src={banner2}
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-[500px] w-full place-items-center">
          <div className="w-3/4 text-center md:w-3/4">
            <Typography
              as={'h3'}
              variant="lead"
              color="white"
              className="mb-16 text-right"
            >
              <p className="text-3xl font-bold">
                WE PREPARE 
              </p>

            <p className="text-3xl font-bold">
FRESH FOOD <span className="text-orange-900">VEGIES</span>
              </p> 
             <small className="font-bold">Enjoy Delicious Food</small>
            </Typography>
            <div className="flex p-2 justify-between gap-2 text-white bg-[#00000065] w-full">
              <div className="text-left">
                <p className="font-bold">RESTAURANT DISH</p>
                <small>Enjoy With Best Dish</small>
              </div>
              <div className="text-left">
                <p className="font-bold">BAKERY ITEMS</p>
                <small>Every Morning Test Better</small>
              </div>
              <div className="text-left">
                <p className="font-bold">FRESH FOOD</p>
                <small>Keep Healthy Life Cycle</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselWithContent;
