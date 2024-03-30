import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../../redux/addtocart/addcart";

export default function Sales() {
  const [productinfo, setproductinfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://abrotherbackend.vercel.app/getproduct")
      .then((res) => res.json())
      .then((data) => setproductinfo(data));
  }, []);

  const handleaddtocart = (item) => {
    const producttoadd = {
      name: item.name,
      discountprice: item.discountprice,
      image: item.image,
      quantity: 1,
    };
    dispatch(addtocart(producttoadd));
    toast.success("succefully added to cart");
  };

  return (
    <div className="px-5 md:px-11 py-6">
      <Toaster />
      {/* Section Name */}
      <div className="relative space-x-5">
        <span className="absolute bg-reddish w-3 h-9 rounded-sm"></span>
        <h3 className="text-reddish text-xl font-bold">Today's</h3>
      </div>
      {/* Sale Time */}
      <div className="my-8 md:flex justify-between items-center">
        <div className="md:flex gap-6 lg:gap-20">
          <h2 className="text-3xl font-semibold">Flash Sales</h2>
          <div className="mt-8 md:mt-0 flex items-center gap-x-4 font-bold text-3xl">
            <h4 className="relative before:content-['Days'] before:text-sm before:font-semibold before:absolute before:-top-5">
              03
            </h4>
            <span className="text-reddish">:</span>
            <h4 className="relative before:content-['Hours'] before:text-sm before:font-semibold before:absolute before:-top-5">
              23
            </h4>
            <span className="text-reddish">:</span>
            <h4 className="relative before:content-['Minutes'] before:text-sm before:font-semibold before:absolute before:-top-5">
              19
            </h4>
            <span className="text-reddish">:</span>
            <h4 className="relative before:content-['Seconds'] before:text-sm before:font-semibold before:absolute before:-top-5">
              56
            </h4>
          </div>
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
      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productinfo.map((item, index) => {
          return (
            <div className="relative w-full" key={index}>
              {/* Discount value */}
              <span className="z-10 bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
                {Math.round((item.discountprice / item.actualprice) * 100) -
                  100}
                %
              </span>
              {/* add to wishlist */}
              <span className="z-10 bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
                <FaRegHeart />
              </span>
              <div className="w-full border border-lightgrey relative">
                {/* Product Image */}
                <Link to={`category/${item.category}/${item.name}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-36 md:h-44 object-cover"
                  />
                </Link>
                {/* Add to cart button*/}
                <button
                  onClick={() => handleaddtocart(item)}
                  className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
              <Link to={`category/${item.category}/${item.name}`}>
                <div className="my-3 max-w-44">
                  <h3 className="truncate">{item.name}</h3>
                  <p className="text-reddish">
                    {item.discountprice}
                    <del className="text-darkgrey mx-3">{item.actualprice}</del>
                  </p>
                  <p className="flex my-2 gap-1 text-golden">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-darkgrey mx-2">(88)</span>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* View All product button */}
      <div className="flex justify-center items-center my-7">
        <button className="bg-reddish text-white px-3 py-2 font-semibold rounded-sm">
          View All Products
        </button>
      </div>
    </div>
  );
}
