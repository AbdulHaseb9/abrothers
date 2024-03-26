import React from "react";
import sliderimg1 from "../assets/images/sliderimg1.png";

export const Categories = () => {
  return (
    <div className="px-5 md:px-8 py-1 text-sm hidden sm:flex">
      <div className="w-full md:w-2/5 lg:w-1/5 border-r border-darkgrey py-6 flex justify-center">
        <ul className="space-y-4 font-semibold">
          <li className="py-1">Woman's Fashion</li>
          <li className="py-1">Men's Fashion</li>
          <li className="py-1">Electronics</li>
          <li className="py-1">Home & Lifestyles</li>
          <li className="py-1">Medicine</li>
          <li className="py-1">Sports & Outdoor</li>
          <li className="py-1">Baby's & Toys</li>
          <li className="py-1">Groceries & Pets</li>
          <li className="py-1">Health & Beauty</li>
        </ul>
      </div>
      <div className="p-5">
        <img src={sliderimg1} alt="" />
      </div>
    </div>
  );
};
