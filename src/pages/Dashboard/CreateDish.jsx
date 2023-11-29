import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const CreateDish = () => {
  const [foodItem, setFoodItem] = useState({
    name: "",
    description: "",
    restaurant_name: "",
    price: "",
  });

  const submitFoodItem = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/dish/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("access_key"),
        },
        body: JSON.stringify(foodItem),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data) {
            Object.keys(data).forEach((field) => {
              if (field == "non_field_errors") {
                toast.error(`${data[field].join(", ")}`);
              } else {
                if(field != 'reviews') {
                    toast.error(`${field} ${data[field].join(", ")}`);
                }
              }
            });
        }
      } else {
        console.log(data)
        toast.success("Dish Create Successfully");
        // navigate("/");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="mt-10 w-full h-auto mb-12 mx-auto">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create New Dish
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Dish Title
            </Typography>
            <Input
              placeholder="Dish Title"
              className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onBlur={(e) => setFoodItem({ ...foodItem, name: e.target.value })}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Dish Description
            </Typography>
            <Input
              placeholder="Dish Title"
              className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onBlur={(e) =>
                setFoodItem({ ...foodItem, description: e.target.value })
              }
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Restaurant Name
            </Typography>
            <Input
              placeholder="Dish Title"
              className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onBlur={(e) =>
                setFoodItem({ ...foodItem, restaurant_name: e.target.value })
              }
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            {/* <Input
            type="number"
              placeholder="Dish price"
              className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
            <input
              onBlur={(e) =>
                setFoodItem({ ...foodItem, price: e.target.value })
              }
              type="number"
              className="h-11 rounded-md focus:border-blue-gray-900 focus:outline-none pl-3  bg-transparent border-blue-gray-200 border w-full"
              placeholder="Price"
              name=""
              id=""
            />
          </div>
          <Button className="mt-6" onClick={submitFoodItem}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateDish;
