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

const Login = () => {
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
      <div className="flex justify-center items-center h-[80vh]">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-2 grid h-20 place-items-center"
          >
            <Typography variant="h4" color="white">
              Login
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/sign-up">Sign Up</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </section>
    );
};

export default Login;