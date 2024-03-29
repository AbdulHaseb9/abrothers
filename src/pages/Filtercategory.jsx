import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export default function Filtercategory() {
  const { name } = useParams();

  const [productname, setproductname] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getproduct").then((resp) => {
      resp.json().then((data) => setproductname(data));
    });
  }, []);

  const filterproduct = productname.filter((value) => value.category == name);

  return (
    <div className="px-5 md:px-11 py-6 my-12">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filterproduct.map((item, index) => {
          return (
            <Link to={`${item.name}`} key={index}>
              <div className="w-full">
                <div className="w-full border border-lightgrey relative">
                  {/* Discount value */}
                  <span className="bg-reddish text-white text-xs p-1 rounded-md absolute top-2 left-2">
                    {Math.round((item.discountprice / item.actualprice) * 100) -
                      100}
                    %
                  </span>
                  {/* add to wishlist */}
                  <span className="bg-lightgrey p-1 rounded-full absolute right-2 top-2 cursor-pointer">
                    <FaRegHeart />
                  </span>
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-36 md:h-44 object-cover"
                  />
                  {/* Add to cart button*/}
                  <div className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer">
                    Add To Cart
                  </div>
                </div>
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
