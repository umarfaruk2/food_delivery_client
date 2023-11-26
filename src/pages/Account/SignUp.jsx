import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Radio
} from "@material-tailwind/react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate  = useNavigate();

    const backToHome = () => {
        navigate('/')
    }

  return (
    <section className="">
        <div className="flex items-center space-x-2 pt-10 pl-10">
            <IoMdArrowBack size={25} onClick={backToHome} className="cursor-pointer" />
            <p>
                Back To Home
            </p>
        </div>
      <div className="flex justify-center items-center h-[100vh]">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-2 grid h-20 place-items-center"
          >
            <Typography variant="h4" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Phone" size="lg" />
            <Input label="Address" size="lg" />
            <Input label="Password" size="lg" />
            <Input label="Confirm Password" size="lg" />
            <div className="flex gap-10">
      <Radio name="type" label="Customer" defaultChecked />
      <Radio name="type" label="Restaurant"  />
    </div>
            {/* <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/login">Sign In</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SignUp;
