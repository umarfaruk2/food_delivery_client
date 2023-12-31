import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Rating
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';

const MapFoodItem = (props) => {
    const {id, image, title, description, price} = props.item;
    const navigate = useNavigate()
    const food_detail = () => {
      navigate('/food_detail/'+id)
    }

    return (
        <Card className="overflow-hidden cursor-pointer" onClick={food_detail}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={image}
              alt="ui/ux review check"
              className="h-44 w-full"
            />
          </CardHeader>
          <CardBody className="-mt-4">
            <Typography variant="h6" color="blue-gray">
             {title} 
            </Typography>
            <Typography
              variant="p"
              color="gray"
              className="mt-1 font-normal"
            >
               <span className='font-bold'>Description</span>: {description}
            </Typography>
            <Rating value={4} readonly className='my-2' />
            <Typography
              variant="p"
              color="gray"
              className="font-normal"
            >

              <span className='font-bold'>Price</span>: {price}
            </Typography>
          </CardBody>
          <div className='flex justify-end space-x-4 mx-8 -mt-2 mb-4'>
            <Link className='bg-blue-800 text-white py-1 px-2 rounded-md' to='#'>
                <small>Add To Cart</small>
            </Link>
            <Link className='text-white bg-orange-800 py-1 px-3 rounded-md'>
                <small >Buy Now</small> 
            </Link>
          </div>
          {/* <CardFooter className="flex items-center justify-between">

          </CardFooter> */}
        </Card>
    );
};



export default MapFoodItem;