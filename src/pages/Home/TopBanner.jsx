import React from "react";
import { Carousel } from "keep-react";
import Image from "../Utils";

const TopBanner = () => {
  return (
    <div className="mx-5">
      <Carousel slideInterval={5000} showControls={true} indicators={true} className="rounded-full">
        <Image
          src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
          alt="slider-1"
          height={600}
          width={910}
          className='rounded-none'
        />
        <Image
          src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
          alt="slider-2"
          height={600}
          width={910}
        />
      </Carousel>
    </div>
  );
};

export default TopBanner;
