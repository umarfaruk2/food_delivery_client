import React from "react";
import { BiSolidDrink, BiTimeFive } from "react-icons/bi";
import { IoRestaurant } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";

const Speciality = () => {
  return (
    <>
      <h3 className="text-center mt-10 font-bold text-xl">OUR SPECIALITIES</h3>
      <p className="border-2 border-b-orange-900 w-48 mx-auto"></p>

      <div className="my-12 flex justify-between mx-32 md:mx-40 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-900 w-16 h-16 rounded-full justify-center items-center flex">
            <IoRestaurant color="white"  size={23} />
          </div>
          <small className="font-bold text-left mt-2">Best Restaurant Food</small>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-900 w-16 h-16 rounded-full justify-center items-center flex">
            <BiTimeFive color="white" size={23} />
          </div>
          <small className="font-bold text-left mt-2">On Time Delivery</small>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-900 w-16 h-16 rounded-full justify-center items-center flex">
            <MdOutlineEmojiPeople color="white" size={23} />
          </div>
          <small className="font-bold text-left mt-2">Client Satisfaction</small>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-900 w-16 h-16 rounded-full justify-center items-center flex">
            <TbDiscount2 color="white" size={23}  />
          </div>
          <small className="font-bold text-left mt-2">Discount Offer</small>
        </div>
      </div>
    </>
  );
};

export default Speciality;
