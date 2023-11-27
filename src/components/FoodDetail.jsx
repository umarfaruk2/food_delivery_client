import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import food1 from "../assets/images/food-1.jpg";

const FoodDetail = () => {
  const { id } = useParams();
  console.log(id);

  const dish = {
    id: 1,
    image: food1,
    title: "Bangla briany",
    description:
      "best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.",
    price: 322,
  };
  return (
    <div>
      <Header />
      <div className="mx-14">
        <img className="w-full h-64 rounded-md" src={dish.image} alt="image" />

        <h3 className="mt-8 text-xl font-bold">{dish.title}</h3>
        <p className="my-3 text-gray-700">{dish.description}</p>
        <p className="mb-3 text-sm"><span className="font-bold">Restaurant</span>: <span className="text-cyan-800 font-bold rounded-md">New Food House</span></p>
        <p className="font-bold">$ {dish.price}</p>
        <div className="flex space-x-4 mt-6">
          <Link className="bg-blue-800 text-white py-1 px-2 rounded-md" to="#">
            <small>Add To Cart</small>
          </Link>
          <Link className="text-white bg-orange-800 py-1 px-3 rounded-md">
            <small>Buy Now</small>
          </Link>
        </div>
      </div>

      {/* user review and rating */}
      <div className="mx-14 mt-10 mb-8">4
        <h4 className="text-center font-bold text-xl">User Review and Rating</h4>
        <p className="border-2 border-b-orange-900 w-64 mx-auto"></p>

        <button className="text-bold text-white bg-orange-900 py-1 px-3 rounded-md">Add A Review</button>
      </div>
    </div>
  );
};

export default FoodDetail;
