import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import food1 from "../assets/images/food-1.jpg";
import {
  Rating,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState({
    review: "",
    rating: "",
  });

  const data = [
    {
      review: 'This Food it great Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero quis illum hic quos dolore. In, quis veniam totam saepe inventore reprehenderit assumenda sequi laudantium quibusdam iusto sapiente recusandae illo iste perspiciatis! Nihil distinctio odio laboriosam error eveniet magnam esse, possimus pariatur blanditiis natus. Earum, architecto! Ad soluta eius vero'
    },
    {
      review: 'This Food it great Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero quis illum hic quos dolore. In, quis veniam totam saepe inventore reprehenderit assumenda sequi laudantium quibusdam iusto sapiente recusandae illo iste perspiciatis! Nihil '
    },
  ]

  const handleOpen = () => setOpen(!open);

  const dish = {
    id: 1,
    image: food1,
    title: "Bangla briany",
    description:
      "best food Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iste.",
    price: 322,
  };

  const redirectToLogin = () => {
    if (localStorage.getItem("access_key")) {
      // onClick={handleOpen}
      handleOpen();
    } else {
      navigate("/login");
    }
  };

  const submitReviewRating = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/review_rating/3/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + localStorage.getItem("access_key"),
          },
          body: JSON.stringify(reviewRating),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        if (data) {
          Object.keys(data).forEach((field) => {
            if (field == "non_field_errors") {
              toast.error(`${data[field].join(", ")}`);
            } else {
              toast.error(`${field} ${data[field].join(", ")}`);
            }
          });
        }
      } else {
        toast.success("Review and Rating given Successfully");
      }
    } catch (error) {
      console.log("error: ", error);
    }
    handleOpen();
  };
  return (
    <div>
      <Header />
      <div className="mx-14">
        <img className="w-full h-64 rounded-md" src={dish.image} alt="image" />

        <h3 className="mt-8 text-xl font-bold">{dish.title}</h3>
        <p className="my-3 text-gray-700">{dish.description}</p>
        <p className="mb-3 text-sm">
          <span className="font-bold">Restaurant</span>:{" "}
          <span className="text-cyan-800 font-bold rounded-md">
            New Food House
          </span>
        </p>
        <Rating value={4} readonly />
        <p className="font-bold mt-2">$ {dish.price}</p>
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
      <div className="mx-14 mt-10 mb-8">
        <h4 className="text-center font-bold text-xl">
          User Reviews
        </h4>
        <p className="border-2 border-b-orange-900 w-32 mx-auto"></p>

        {/* review */}
        { data.map((item) => <p className="my-4 h-auto p-3 bg-cyan-50 rounded-md">{item.review}</p>)}
        

        <button
          className="text-bold text-white bg-orange-900 py-1 px-3 rounded-md"
          onClick={redirectToLogin}
        >
          Add A Review
        </button>

        <Dialog open={open} handler={handleOpen} size="sm">
          <DialogHeader className="text-xl -mb-4">
            Give Review and Rating
          </DialogHeader>
          <DialogBody className="-mb-8">
            <input
              type="text"
              placeholder="Write your review here"
              onBlur={(e) =>
                setReviewRating({ ...reviewRating, review: e.target.value })
              }
              className="border w-full border-gray-400 h-auto p-3"
            />
            <p className="my-2 font-bold text-xl text-black">Rating</p>
            <Rating
              value={0}
              onChange={(value) =>
                setReviewRating({ ...reviewRating, rating: value })
              }
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              color="green"
              variant="gradient"
              onClick={submitReviewRating}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default FoodDetail;
