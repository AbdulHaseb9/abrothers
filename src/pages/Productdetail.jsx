import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";

export default function Productdetail() {
  const { prodname } = useParams();
  const [isloading, setisloading] = useState(true);

  const [productname, setproductname] = useState([]);

  useEffect(() => {
    fetch("https://abrotherbackend.vercel.app/getproduct").then((resp) => {
      resp.json().then((data) => {
        setproductname(data);
        setisloading(false);
        window.scroll(0, 0)
      });
    });
  }, []);

  const filterproduct = productname.filter((value) => value.name == prodname);

  return (
    <div className="px-5 md:px-11 py-6">
      {/* Route */}
      <div className="text-sm font-semibold">
        <Link to={"/"} className="text-darkgrey mr-1">
          Home
        </Link>
        /<span className="ml-1 w-2">{prodname}</span>
      </div>
      {/* Product Detail */}
      {isloading ? (
        <div className="w-full md:flex my-9 space-y-7 md:space-y-0">
          <div className="w-full md:w-1/2 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* product image */}
            <div className="space-x-14 mlg:space-x-24 md:space-x-8 lg:space-x-0 flex lg:block lg:space-y-9">
              <Skeleton height={170} className="w-28 md:w-36" />
              <Skeleton height={170} className="w-28 md:w-36" />
            </div>
            <Skeleton height={340} className="w-72 md:w-80" />
          </div>
          <div className="w-full md:w-1/2 mlg:px-8 md:px-9">
            {/* Product Name Skeleton */}
            <Skeleton width={250} />
            {/* Product Ratings and stock availability Skeleton */}
            <div className="text-sm flex items-center my-1">
              <Skeleton width={150} />
            </div>
            {/* Product Price Skeleton */}
            <Skeleton width={190} />
            {/* Product Description Skeleton */}
            <Skeleton count={4} width={240} />
            {/* Product Colours Skeleton */}
            <div>
              <Skeleton width={90} />
            </div>
            {/* Buy Now Button Skeleton */}
            <Skeleton width={90} />
          </div>
        </div>
      ) : (
        filterproduct.map((item, index) => {
          return (
            <div
              className="w-full md:flex my-9 space-y-7 md:space-y-0"
              key={index}
            >
              <div className="w-full md:w-1/2 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                {/* product image */}
                <div className="space-x-14 mlg:space-x-24 md:space-x-8 lg:space-x-0 flex lg:block lg:space-y-9">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="border w-28 md:w-36"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="border w-28 md:w-36"
                  />
                </div>
                <img src={item.image} alt={item.name} className="w-80 border" />
              </div>
              <div className="w-full md:w-1/2 mlg:px-8 md:px-9">
                {/* Product Name */}
                <h3 className="font-semibold text-xl">{item.name}</h3>
                {/* Product Ratings and stock availability */}
                <div className="text-sm flex items-center my-1">
                  <span className="text-golden flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span className="text-black mx-2">({item.ratings}) </span>
                  <span className="mx-3">|</span>
                  <span className="text-green-600">{item.availability}</span>
                </div>
                {/* Product Price */}
                <h2 className="font-semibold text-lg">
                  PKR {item.discountprice}
                  <del className="mx-4 text-darkgrey">
                    PKR {item.actualprice}
                  </del>
                </h2>
                {/* Product Description */}
                <p className="text-xs my-1 text-gray-800">{item.description}</p>
                <hr className="my-3" />
                {/* Product Colours */}
                <div>
                  <label>Colours:</label>
                  <select name="" id="" className="text-sm outline-none mx-4">
                    <option value="Red">{item.color}</option>
                    <option value="Blue">blue</option>
                  </select>
                </div>
                {/* Buy Now Button */}
                <button className="bg-reddish px-3 py-1  text-white rounded-sm my-3">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
