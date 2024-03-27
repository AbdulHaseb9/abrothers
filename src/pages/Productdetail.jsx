import React from "react";
import { FaStar } from "react-icons/fa";

export default function Productdetail() {
  return (
    <div className="px-5 md:px-11 py-6">
      {/* Route */}
      <div className="text-sm font-semibold">
        <span className="text-darkgrey mr-1">Home</span> /
        <span className="ml-1"> Product Name</span>
      </div>
      {/* Product Detail */}
      <div className="w-full md:flex my-9 space-y-7 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="space-x-14 mlg:space-x-24 md:space-x-8 lg:space-x-0 flex lg:block lg:space-y-9">
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="border w-28 md:w-36"
            />
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="border w-28 md:w-36"
            />
          </div>
          <img
            src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
            alt=""
            className="w-80 border"
          />
        </div>
        <div className="w-full md:w-1/2 mlg:px-8 md:px-9">
          {/* Product Name */}
          <h3 className="font-semibold text-xl">Product Nsme</h3>
          {/* Product Ratings and stock availability */}
          <div className="text-sm flex items-center my-1">
            <span className="text-golden flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="text-black mx-2">(150 Reviews) </span>
            <span className="mx-3">|</span>
            <span className="text-green-600">In Stock</span>
          </div>
          {/* Product Price */}
          <h2 className="font-semibold text-lg">
            $192.00 <del className="mx-4 text-darkgrey">$224</del>
          </h2>
          {/* Product Description */}
          <p className="text-xs my-1 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum,
            sequi deleniti praesentium blanditiis repellat. Nostrum, error alias
            dolor hic quae eaque.
          </p>
          <hr className="my-3" />
          {/* Product Colours */}
          <div>
            <label>Colours:</label>
            <select name="" id="" className="text-sm outline-none mx-4">
              <option value="Red">Red</option>
              <option value="Blue">blue</option>
            </select>
          </div>
          {/* Buy Now Button */}
          <button className="bg-reddish px-3 py-1  text-white rounded-sm my-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
