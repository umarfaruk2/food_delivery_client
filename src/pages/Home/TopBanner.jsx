// import React from "react";
// import { Carousel } from "keep-react";
// import Image from "../Utils";
// import { Button } from "@material-tailwind/react";

// const TopBanner = () => {
//   return (
//     <div className="mx-5">
//       <Carousel slideInterval={5000} showControls={true} indicators={true} className="rounded-full">
//         <Image
//           src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
//           alt="slider-1"
//           height={600}
//           width={910}
//           className='rounded-none'
//         />
//         <Image
//           src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
//           alt="slider-2"
//           height={600}
//           width={910}
//         />
//       </Carousel>

//       <div className="mt-10">
// <Button>Button</Button>
//       </div>
//     </div>
//   );
// };

// export default TopBanner;

import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import banner from '../../assets/images/banner111.jpg';

const CarouselWithContent = () => {
  return (
    <Carousel
      className=""
      navigation={false}
      // autoplay={true}
      // autoplayDelay={3000}
      // loop={true}
    >
      <div className="relative h-[500px] w-full">
        <img
          src={banner}
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-[500px] w-full place-items-center">
          <div className="w-3/4 text-center md:w-3/5">
            <Typography
              as={'h3'}
              variant="lead"
              color="white"
              className="mb-12 text-right"
            >
              <p className="text-3xl font-bold">
                WEPREPARE 
              </p>

            <p className="text-3xl font-bold">
FRESH FOOD <span className="text-orange-900">VEGIES</span>
              </p> 
             <small className="font-bold">Enjoy Delicious Food</small>
            </Typography>
            <div className="flex justify-center gap-2">
              <p>Restaurant Dish</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselWithContent;
