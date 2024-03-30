import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  // Function that handle checkout and redirect to home page
  const handlecheckout = (e) => {
    e.preventDefault();
    toast.success("Order Placed");
    navigate("/");
  };

  return (
    <div className="px-5 md:px-11 py-6 my-12">
      <Toaster />
      <h3 className="text-2xl font-semibold">Billing Details</h3>
      <div>
        <div>
          <form
            className="grid grid-cols-1 lg:grid-cols-3 py-5 gap-7"
            onSubmit={handlecheckout}
          >
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-darkgrey"
              >
                First Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="company"
                className="text-sm font-semibold text-darkgrey"
              >
                Company Name <span className="text-xs">(optional)</span>
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="address"
                className="text-sm font-semibold text-darkgrey"
              >
                Street Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="apartment"
                className="text-sm font-semibold text-darkgrey"
              >
                Apartment, floor, etc{" "}
                <span className="text-xs">(optional)</span>
              </label>
              <input
                type="text"
                name="apartment"
                id="apartment"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="city"
                className="text-sm font-semibold text-darkgrey"
              >
                Town / City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="number"
                className="text-sm font-semibold text-darkgrey"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <div className="space-y-2 md:space-x-4">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-darkgrey"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border bg-lightgrey w-60 rounded"
              />
            </div>
            <input
              type="submit"
              value="Place Order"
              className="lg:col-span-3 bg-reddish w-28  px-2 py-1 text-white rounded"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
