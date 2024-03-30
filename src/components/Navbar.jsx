import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const count = useSelector((state) => state.cart.value);
  const [respnav, setrespnav] = useState(false);
  const [submenu, setsubmenu] = useState(false);

  const selector = useSelector((state) => state.login.value);

  return (
    <>
      <header className="px-4 md:px-6 lg:px-8 flex justify-between items-center pt-4 md:pt-6 pb-2 border-b border-darkgrey relative">
        <div className="flex items-center gap-4">
          <HiMiniBars3BottomLeft
            className="md:hidden cursor-pointer"
            onClick={() => setrespnav(!respnav)}
          />
          <Link to={"/"}>
            <h2 className="text-xl font-bold">A.Brothers</h2>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4 font-semibold text-sm">
          <Link to={"/"} className="hover:border-b border-black">
            Home
          </Link>
          <Link to={"contact"} className="hover:border-b border-black">
            Contact
          </Link>
          <Link to={"checkout"} className="hover:border-b border-black">
            About
          </Link>
          {selector ? (
            <Link to={"myaccount"} className="hover:border-b border-black">
              My Account
            </Link>
          ) : (
            <Link to={"signup"} className="hover:border-b border-black">
              Signup
            </Link>
          )}
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 bg-lightgrey px-2 py-1">
            <input
              type="text"
              placeholder="What are you Looking for?"
              className="bg-transparent outline-none text-sm text-darkgrey"
            />
            <FiSearch className="cursor-pointer" />
          </div>
          <div className="text-xl cursor-pointer">
            <FaRegHeart />
          </div>
          <div className="text-xl cursor-pointer">
            {selector ? (
              <Link to={"cart"} className="relative">
                <MdOutlineShoppingCart />
                <span className="w-5 h-5 flex justify-center items-center text-white absolute -right-1.5 -top-2.5 bg-reddish rounded-full text-sm">
                  {count.length}
                </span>
              </Link>
            ) : (
              <Link to={"signin"} className="relative">
                <MdOutlineShoppingCart />
                <span className="w-5 h-5 flex justify-center items-center text-white absolute -right-1.5 -top-2.5 bg-reddish rounded-full text-sm">
                  {count.length}
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div
        className={`md:hidden h-screen w-72 fixed bg-[#fefefe] z-30 top-[32.5px] ${
          respnav ? `-left-0` : `-left-full`
        } transition-all duration-300`}
      >
        <div className="py-2 px-3 flex justify-end">
          <ImCross
            onClick={() => setrespnav(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full flex py-4">
          <div className="w-1/2">
            <h3
              className={`text-lg font-semibold border-black text-center pb-1 py-2 ${
                submenu
                  ? `text-[#aeaeae]`
                  : "bg-[#eaeaea] text-black  border-b-2"
              }`}
              onClick={() => setsubmenu(false)}
            >
              Main Menu
            </h3>
          </div>
          <div className="w-1/2">
            <h3
              className={`text-lg font-semibold border-black text-center pb-1 py-2 ${
                submenu
                  ? `bg-[#eaeaea] text-black border-b-2`
                  : "text-[#aeaeae]"
              }`}
              onClick={() => setsubmenu(true)}
            >
              Categories
            </h3>
          </div>
        </div>
        <div className="w-full">
          {submenu ? (
            <div className="w-full py-7 flex flex-col">
              <Link
                to={"category/mobile phones"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Mobile Phones
              </Link>
              <Link
                to={"category/computers"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Computers
              </Link>
              <Link
                to={"category/smart watches"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Smart Watches
              </Link>
              <Link
                to={"category/camera"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Camera
              </Link>
              <Link
                to={"category/headphones"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Head phones
              </Link>
              <Link
                to={"category/gaming"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Gaming
              </Link>
              <Link
                to={"category/accessories"}
                onClick={() => setrespnav(false)}
                className="border-y py-3 w-full pl-6 font-semibold"
              >
                Accessories
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <div className="w-9/12 flex items-center gap-2 bg-lightgrey px-4 py-2">
                  <input
                    type="text"
                    placeholder="What are you Looking for?"
                    className="bg-transparent outline-none text-sm text-darkgrey"
                  />
                  <FiSearch className="cursor-pointer" />
                </div>
              </div>
              <div className="w-full py-7 flex flex-col">
                <Link
                  to={"/"}
                  onClick={() => setrespnav(false)}
                  className="border-y py-3 w-full pl-6 font-semibold"
                >
                  Home
                </Link>
                <Link
                  to={"about"}
                  onClick={() => setrespnav(false)}
                  className="border-y py-3 w-full pl-6 font-semibold"
                >
                  About
                </Link>
                <Link
                  to={"contact"}
                  onClick={() => setrespnav(false)}
                  className="border-y py-3 w-full pl-6 font-semibold"
                >
                  Contact
                </Link>
                {selector ? (
                  <Link
                    to={"myaccount"}
                    onClick={() => setrespnav(false)}
                    className="border-y py-3 w-full pl-6 font-semibold"
                  >
                    My Account
                  </Link>
                ) : (
                  <>
                    <Link
                      to={"signup"}
                      onClick={() => setrespnav(false)}
                      className="border-y py-3 w-full pl-6 font-semibold"
                    >
                      Signup
                    </Link>
                    <Link
                      to={"signin"}
                      onClick={() => setrespnav(false)}
                      className="border-y py-3 w-full pl-6 font-semibold"
                    >
                      Login
                    </Link>
                  </>
                )}
                <Link
                  to={"signup"}
                  onClick={() => setrespnav(false)}
                  className="border-y py-3 w-full pl-6 font-semibold"
                >
                  Customer Reviews
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
