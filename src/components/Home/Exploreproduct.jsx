import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Exploreproduct() {
  return (
    <div className="px-5 md:px-11 py-6">
      {/* Section Name */}
      <div className="relative space-x-5">
        <span className="absolute bg-reddish w-3 h-9 rounded-sm"></span>
        <h3 className="text-reddish text-xl font-bold">Our Products</h3>
      </div>
      {/* Section Heading */}
      <div className="my-8 md:flex justify-between items-center">
        <div className="md:flex gap-6 lg:gap-20">
          <h2 className="text-3xl font-semibold">Explore Our Products</h2>
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
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
        <div className="w-full">
          <div className="w-full border border-lightgrey relative">
            <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
              -40%
            </span>
            <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
              <FaRegHeart />
            </span>
            <img
              src="https://media.wisemarket.com.pk/product/remax-rpp-521-20w-22-5w-pd-qc-power-bank-20000mah-92.webp"
              alt=""
              className="w-full h-36 md:h-44 object-cover"
            />
            <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
              Add To Cart
            </div>
          </div>
          <div className="my-3 max-w-44">
            <h3 className="truncate">
              Remax RPP-521 20W+22.5 PD+QC Power Bank 20000 mAh
            </h3>
            <p className="text-reddish">
              $120<del className="text-darkgrey mx-3">$160</del>
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
        </div>
      </div>
      {/* View all product button */}
      <div className="flex justify-center items-center my-7">
        <button className="bg-reddish text-white px-3 py-2 font-semibold rounded-sm">
          View All Products
        </button>
      </div>
    </div>
  );
}
