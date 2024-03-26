import React from "react";
import SignImages from "../assets/images/sideimage.png";

export const Signin = () => {
  return (
    <div className="py-7 flex flex-col md:flex-row gap-7 md:gap-0">
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={SignImages}
          alt="Signup Images"
          className="md:h-[500px] w-full md:object-cover lg:object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-72">
          <h3 className="text-2xl font-semibold">Log in to Exclusive</h3>
          <p className="text-sm font-semibold my-2">Enter your details below</p>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="my-4 w-72 border-b outline-none text-darkgrey"
          />
          <input
            type="text"
            placeholder="Password"
            className="my-4 w-72 border-b outline-none text-darkgrey"
          />
          <div className="flex justify-between items-center">
            <button className="w-24 text-white bg-reddish text-sm px-3 py-2.5 text-center me-2 mb-2 rounded-sm">
              Login
            </button>
            <p className="text-reddish text-sm text-center cursor-pointer">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
