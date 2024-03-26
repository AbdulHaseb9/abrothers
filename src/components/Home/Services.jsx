import React from "react";
import freedelivery from "../../assets/images/freedelivery.png";
import gurantee from "../../assets/images/guarantee.png";
import customerservice from "../../assets/images/customerservice.png";

export default function Services() {
  return (
    <div className="px-5 md:px-11 py-6 mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
      <div className="w-72 flex flex-col items-center justify-center">
        <img src={freedelivery} alt="Truck Icon" className="w-20" />
        <h4 className="my-2 font-bold">FREE AND FAST DELIVERY</h4>
        <p className="font-semibold text-sm">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="w-72 flex flex-col items-center justify-center">
        <img src={customerservice} alt="Truck Icon" className="w-20" />
        <h4 className="my-2 font-bold">24/7 CUSTOMER SERVICE</h4>
        <p className="font-semibold text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="w-72 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
        <img src={gurantee} alt="Safety Icon" className="w-20" />
        <h4 className="my-2 font-bold">MONEY BACK GUARANTEE</h4>
        <p className="font-semibold text-sm">We return money with in 30 days</p>
      </div>
    </div>
  );
}
