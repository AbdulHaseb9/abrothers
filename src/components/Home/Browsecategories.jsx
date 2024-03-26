import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

export default function Browsecategories() {
  return (
    <div className="px-5 md:px-11 py-6">
      {/* Section Name */}
      <div className="relative space-x-5">
        <span className="absolute bg-reddish w-3 h-9 rounded-sm"></span>
        <h3 className="text-reddish text-xl font-bold">Categories</h3>
      </div>
      {/* Section Heading */}
      <div className="my-8 md:flex justify-between items-center">
        <div className="md:flex gap-6 lg:gap-20">
          <h2 className="text-3xl font-semibold">Browse By Category</h2>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <div className="p-3 bg-lightgrey rounded-full cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className="p-3 bg-lightgrey rounded-full cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="grid place-items-center grid-cols-2 md:grid-cols-4 md:place-items-start lg:grid-cols-6 gap-4">
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <FaMobileAlt className="text-5xl" />
          <p className="mt-2 font-semibold">Phones</p>
        </div>
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <HiOutlineDesktopComputer className="text-5xl" />
          <p className="mt-2 font-semibold">Computers</p>
        </div>
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <BsSmartwatch className="text-5xl" />
          <p className="mt-2 font-semibold">SmartWatch</p>
        </div>
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <FaCamera className="text-5xl" />
          <p className="mt-2 font-semibold">Camera</p>
        </div>
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <FaHeadphones className="text-5xl" />
          <p className="mt-2 font-semibold">HeadPhones</p>
        </div>
        <div className="w-36 border border-darkgrey py-6 px-0 md:px-4 rounded-md flex flex-col justify-center items-center hover:bg-reddish hover:text-white transition-all duration-100 cursor-pointer">
          <SiYoutubegaming className="text-5xl" />
          <p className="mt-2 font-semibold">Gaming</p>
        </div>
      </div>
    </div>
  );
}
