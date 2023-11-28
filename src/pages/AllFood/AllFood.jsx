import React, { useState } from "react";
import Header from "../../components/Header";
import { Input, Button } from "@material-tailwind/react";
import food1 from '../../assets/images/food-1.jpg';
import food2 from '../../assets/images/food-2.jpg';
import food3 from '../../assets/images/food-3.jpg';
import food4 from '../../assets/images/food-4.jpg';
import MapFoodItem from "../Home/MapFoodItem";

const AllFood = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [silverAnimation, setSilverAnimation] = useState(false);

  const handleMinChange = (e) => {
    setMinValue(parseInt(e.target.value, 10));
  };

  const handleMaxChange = (e) => {
    setMaxValue(parseInt(e.target.value, 10));
  };

  const handleSliderChange = (e) => {
    setSilverAnimation(true);
    setTimeout(() => {
      setSilverAnimation(false);
    }, 1000);
  };

  const data = [
  {
    'id': 1,
    'image': food1,
    'title': 'dish',
    'description': 'best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 322
  },
  {
    'id': 2,
    'image': food2,
    'title': 'dish 2',
    'description': 'best food 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 982
  },
  {
    'id': 3,
    'image': food3,
    'title': 'new food 2',
    'description': 'icon food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 833
  }, 
  {
    'id': 4,
    'image': food4,
    'title': 'bangla food',
    'description': 'icon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 993
  },
  {
    'id': 5,
    'image': food3,
    'title': 'new food 2',
    'description': 'icon food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 833
  },
  {
    'id': 6,
    'image': food1,
    'title': 'dish',
    'description': 'best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 322
  },
]


  return (
    <div>
      <Header />
      <div className="flex justify-center space-x-16 border-b pb-3 border-b-gray-800">
        <div className="flex space-x-4">
          <Input
            type="search"
            placeholder="Search dish title and description"
            containerProps={{
              className: "min-w-[288px]",
            }}
            className=" !border-t-blue-gray-300 pl-4 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button size="xs" className="rounded-lg ">
            Search
          </Button>
        </div>
        <div className="flex space-x-4">
          <div className="price-range-slider flex space-x-2 items-center">
            <p className="">{minValue}</p>
            <div
              className={`silver-bg ${
                silverAnimation ? "animate-silver" : ""
              }`}
            />
            <div>
              <input
                type="range"
                min={0}
                max={1000}
                className=""
                value={minValue}
                onChange={handleMinChange}
                onMouseUp={handleSliderChange}
              />
            </div>

            {/* <div className="range-values"> */}
            {/* </div> */}
          </div>
          <Button size="xs" className="rounded-lg ">
            Search by price range
          </Button>
        </div>
      </div>

      <div className="mt-20">
 <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mx-20 mx-10 my-10">
        {
          data.map(item => <MapFoodItem item = {item} />)
        }
      </div>
      </div>
    </div>
  );
};

export default AllFood;
