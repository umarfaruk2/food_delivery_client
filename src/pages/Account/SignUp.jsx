import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Radio,
} from "@material-tailwind/react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password2: "",
    customer: true,
    restaurant: false,
  });

  console.log("user:", user);
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  const submitUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          Object.keys(errorData.errors).forEach((field) => {
            if (field == "non_field_errors") {
              toast.error(`${errorData.errors[field].join(", ")}`);
            } else {
              toast.error(`${field} ${errorData.errors[field].join(", ")}`);
            }
          });
        }
      } else {
        toast.success("Account create successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="">
      <div className="flex items-center space-x-2 pt-10 pl-10">
        <IoMdArrowBack
          size={25}
          onClick={backToHome}
          className="cursor-pointer"
        />
        <p>Back To Home</p>
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
            <Input
              label="Name"
              onBlur={(e) => setUser({ ...user, name: e.target.value })}
              size="lg"
              required
            />
            <Input
              label="Email"
              onBlur={(e) => setUser({ ...user, email: e.target.value })}
              size="lg"
              required
            />
            <Input
              label="Phone"
              onBlur={(e) => setUser({ ...user, phone: e.target.value })}
              size="lg"
              required
            />
            <Input
              label="Address"
              onBlur={(e) => setUser({ ...user, address: e.target.value })}
              size="lg"
              required
            />
            <Input
              type="password"
              label="Password"
              onBlur={(e) => setUser({ ...user, password: e.target.value })}
              size="lg"
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              onBlur={(e) => setUser({ ...user, password2: e.target.value })}
              size="lg"
              required
            />
            <div className="flex gap-10">
              <div className="flex gap-10">
                <Radio
                  name="type"
                  onClick={() =>
                    setUser({ ...user, customer: true, restaurant: false })
                  }
                  label="Customer"
                  defaultChecked
                />
                <Radio
                  name="type"
                  onClick={() =>
                    setUser({ ...user, customer: false, restaurant: true })
                  }
                  label="Restaurant"
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={submitUser} variant="gradient" fullWidth>
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
