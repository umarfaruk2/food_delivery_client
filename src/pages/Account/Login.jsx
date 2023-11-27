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
import { toast } from "react-toastify";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const backToHome = () => {
    navigate("/");
  };

  const submitUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (!response.ok) {
        if (data && data.errors) {
          Object.keys(data.errors).forEach((field) => {
            if (field == "non_field_errors") {
              toast.error(`${data.errors[field].join(", ")}`);
            } else {
              toast.error(`${field} ${data.errors[field].join(", ")}`);
            }
          });
        }
      } else {
        toast.success("User Login Successfully");
        localStorage.setItem('access_key', data.token.access)
        localStorage.setItem('refresh_key', data.token.refresh)
        navigate("/");
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
            <Input type="email" label="Email" onBlur={(e) => setUser({ ...user, email: e.target.value })} size="lg" required />
            <Input type="password" label="Password" onBlur={(e) => setUser({ ...user, password: e.target.value })} size="lg" required />
          </CardBody>
          {/* forget password */}
          {/* <div className="ml-6 mb-4 text-sm -mt-2">
            <Link to='#'>Forget Password ?</Link>
          </div> */}
          <CardFooter className="pt-0">
            <Button onClick={submitUser} variant="gradient" fullWidth>
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
