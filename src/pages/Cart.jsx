import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const count = useSelector((state) => state.cart.value);
  const navigate = useNavigate();
  const navigatetohome = () => {
    navigate("/");
  };

  console.log(count);
  // console.log(count[0].quantity + 2);


  return (
    <div className="px-5 md:px-11 py-6">
      {/* Cart Category */}
      <p className="text-sm font-semibold">
        <span className="text-darkgrey">Home /</span> Cart
      </p>
      {/* Cart Items */}
      <div className="my-6">
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px] border border-lightgrey grid grid-cols-4 place-items-center font-semibold">
          <div>
            <h4>Product</h4>
          </div>
          <div>
            <h4>Price</h4>
          </div>
          <div>
            <h4>Quantity</h4>
          </div>
          <div>
            <h4>Subtotal</h4>
          </div>
        </div>
        {count.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px] border border-lightgrey grid grid-cols-4 place-items-center font-semibold my-5"
            >
              <div className="md:flex items-center">
                <img src={item.image} alt={item.name} className="max-h-20" />
                <figcaption className="text-center truncate w-32">
                  {item.name}
                </figcaption>
              </div>
              <div>
                <h4>PKR {item.discountprice}</h4>
              </div>
              <div>
                <span className="text-xl mx-2 p-1 cursor-pointer">-</span>
                <input
                  type="text"
                  className="w-7 text-center"
                  placeholder="1"
                  value={item.quantity}
                  disabled
                  max={20}
                  min={1}
                />
                <span
                  className="text-xl mx-2 p-1 cursor-pointer"
                >
                  +
                </span>
              </div>
              <div>
                <h4>{item.discountprice}</h4>
              </div>
            </div>
          );
        })}
      </div>
      {/* Return to home button */}
      <div>
        <button
          onClick={navigatetohome}
          className="border border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-100"
        >
          Return To Shop
        </button>
      </div>
      {/* Total Payment and coupon section */}
      <div className="my-9 md:flex">
        {/* Coupon Code */}
        <div className="w-full md:w-1/2 flex justify-center md:block">
          <input
            className="w-[147px] lg:w-auto border border-black text-darkgrey p-2"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="bg-reddish text-white font-semibold p-2 rounded ml-3">
            Apply Coupon
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-72 border border-black p-5">
            <h3>Cart Total</h3>
            <div className="my-2">
              <h4 className="flex justify-between text-darkgrey text-sm pb-2 font-semibold">
                Subtotal: <span className="text-black">$1750</span>
              </h4>
              <hr />
            </div>
            <div className="my-2">
              <h4 className="flex justify-between text-darkgrey text-sm pb-2 font-semibold">
                Shipping: <span className="text-black">Free</span>
              </h4>
              <hr />
            </div>
            <div className="my-2">
              <h4 className="flex justify-between text-darkgrey text-sm pb-2 font-semibold">
                Total: <span className="text-black">$1750</span>
              </h4>
              <hr />
            </div>
            {/* Checkout button */}
            <div className="flex justify-center mt-4">
              <button className="bg-reddish px-4 py-2 text-white font-semibold">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
