import React, { useState } from "react";
import SignImages from "../assets/images/sideimage.png";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export const Signup = () => {
  const [registerdata, setregisterdata] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // function that handle register when user submit data
  const handleregister = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerdata),
    })
      .then((resp) => {
        resp.json();
        resp.status === 402
          ? toast.error("Email already taken")
          : toast.success("registered sucessfully");
      })
      .then((data) => {
        console.log(data);
        navigate("/signin");
      });
  };

  return (
    <div className="py-7 flex flex-col gap-7 md:flex-row md:gap-0">
      <Toaster />
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={SignImages}
          alt="Signup Images"
          className="md:h-[500px] w-full md:object-cover lg:object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-72">
          <h3 className="text-2xl font-semibold">Create an account</h3>
          <p className="text-sm font-semibold my-2">Enter your details below</p>
          <form onSubmit={handleregister}>
            <input
              type="text"
              onChange={(e) =>
                setregisterdata({ ...logindata, username: e.target.value })
              }
              placeholder="Enter username"
              className="my-4 w-72 border-b outline-none text-darkgrey"
              required
            />
            <input
              type="text"
              onChange={(e) =>
                setregisterdata({ ...logindata, fullname: e.target.value })
              }
              placeholder="Enter Full Name"
              className="my-4 w-72 border-b outline-none text-darkgrey"
              required
            />
            <input
              type="email"
              required
              placeholder="Enter email address"
              className="my-4 w-72 border-b outline-none text-darkgrey"
              onChange={(e) =>
                setregisterdata({
                  ...registerdata,
                  emailorphone: e.target.value,
                })
              }
            />
            <input
              type="password"
              required
              placeholder="Enter password"
              className="my-4 w-72 border-b outline-none text-darkgrey"
              onChange={(e) =>
                setregisterdata({ ...registerdata, password: e.target.value })
              }
            />
            <input
              type="submit"
              value={"Create Account"}
              className="cursor-pointer w-72 text-white bg-reddish text-sm px-3 py-2.5 text-center me-2 mb-2"
            />
          </form>
          <button
            type="button"
            className="w-72 text-black border border-darkgrey font-medium text-sm px-3 py-2.5 inline-flex justify-center items-center me-2 mb-2 gap-1 my-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18"
              height="18"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign up with Google
          </button>
          <p className="text-darkgrey text-sm text-center">
            Already have account?
            <Link
              to={"/signin"}
              className="text-black border-b border-black ml-3 cursor-pointer"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
