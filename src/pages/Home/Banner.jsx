import React from "react";
import { Carousel } from "keep-react";
import Image from "../Utils";

const Banner = () => {
  return (
    <>
      <Carousel slideInterval={5000} showControls={true} indicators={true}>
        <Carousel.Item>
          <Image
            src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
            alt="slider-1"
            height={400}
            width={910}
          />
          <Carousel.Caption>
            <h2 className="text-5xl text-white">Slide 1</h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
            alt="slider-2"
            height={400}
            width={910}
          />
          <Carousel.Caption>
            <h2 className="text-5xl text-white">Slide 2</h2>
            <p className="text-xl text-white">
              Phasellus nec sem velit. Nullam et tortor in magna ullamcorper
              tristique.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
            alt="slider-3"
            height={400}
            width={910}
          />
          <Carousel.Caption>
            <h2 className="text-5xl text-white">Slide 3</h2>
            <p className="text-xl text-white">
              Donec vel mi at diam molestie faucibus. Duis eu lectus et dui
              posuere mollis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
            alt="slider-4"
            height={400}
            width={910}
          />
          <Carousel.Caption>
            <h2 className="text-5xl text-white">Slide 4</h2>
            <p className="text-xl text-white">
              Proin ac massa at arcu condimentum consectetur. Donec eget ipsum
              id mauris egestas molestie.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
