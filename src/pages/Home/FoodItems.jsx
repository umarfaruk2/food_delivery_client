import React from "react";
import MapFoodItem from "./MapFoodItem";
import food1 from '../../assets/images/food-1.jpg';
import food2 from '../../assets/images/food-2.jpg';
import food3 from '../../assets/images/food-3.jpg';
import food4 from '../../assets/images/food-4.jpg';
import { Link } from "react-router-dom";

const data = [
  {
    'image': food1,
    'title': 'dish',
    'description': 'best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 322
  },
  {
    'image': food2,
    'title': 'dish 2',
    'description': 'best food 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 982
  },
  {
    'image': food3,
    'title': 'new food 2',
    'description': 'icon food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 833
  }, 
  {
    'image': food4,
    'title': 'bangla food',
    'description': 'icon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 993
  },
  {
    'image': food3,
    'title': 'new food 2',
    'description': 'icon food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 833
  },
  {
    'image': food1,
    'title': 'dish',
    'description': 'best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.',
    'price': 322
  },
]

const FoodItems = () => {
  return (
    <div className="mb-10 mt-20">
      <h3 className="text-center font-bold text-xl">DELICIOUS FOOD</h3>
      <p className="border-2 border-b-orange-900 w-48 mx-auto"></p>

      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mx-20 mx-10 my-10 cursor-pointer">
        {
          data.map(item => <MapFoodItem item = {item} />)
        }
      </div>

      <div className="text-center">
        <Link className="bg-orange-900 py-2 px-5 rounded-full text-white">See All Food</Link>
      </div>


      {/* hod deal section */}
      <div className="bg-bottom-header  bg-cover bg-center h-72 mt-12">
        <div className="bg-[#000000b2] w-full h-full flex justify-center items-center">

      <div className="text-white text-center space-y-3">
            <h3 className="text-2xl font-bold">HOT DEAL OF THE DAY</h3>
            <small>Buy and Enjoy Delicious Food</small> <br />
            <p></p>
            <Link className="bg-orange-900 py-1 px-2 rounded-full text-white">
              <small>ORDER NOW</small> 
            </Link>
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default FoodItems;
