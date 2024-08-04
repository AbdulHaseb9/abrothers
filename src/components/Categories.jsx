import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";


export const Categories = () => {
  return (
    <div className="px-5 md:px-8 hidden sm:block">
      <div className="flex justify-around gap-2 py-3">
        <div className="flex items-center text-sm cursor-pointer">
          <Link to={'allcategories'} className="font-semibold text-base">All Categories</Link>
          <FaAngleDown className="mx-1" />
        </div>
        {/* <div className="flex items-center text-sm cursor-pointer">
          <p className="font-semibold text-red-500">Hot Offers</p>
          <i className="fa fa-angle-down mx-1"></i>
        </div> */}
        <nav className="text-base font-semibold text-[#707070]">
          <ul className="flex items-center gap-4 flex-wrap">
            <li className="relative group/showli">
              <Link
                to='mobile'
              >
                Mobile
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="mobile/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="mobile/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="mobile/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="mobile/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="mobile/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="mobile/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <Link
                to="laptop"
              >
                Laptop
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to={'laptop/dell'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Dell</Link>
                <Link to={'laptop/hp'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Hp</Link>
                <Link to={'laptop/apple'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to={'laptop/lenovo'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Lenovo</Link>
                <Link to={'laptop/thinkpad'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Thinkpad</Link>
                <Link to={'laptop/samsung'} className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <Link
                to="tablets"
              >
                Tablets
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="tablets/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="tablets/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="tablets/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="tablets/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="tablets/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="tablets/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <Link
                to="smartwatches"
              >
                Smart Watches
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="smartwatches/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="smartwatches/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="smartwatches/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="smartwatches/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="smartwatches/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="smartwatches/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <Link
                to="accessories"
              >
                Accessories
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="accessories/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="accessories/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="accessories/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="accessories/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="accessories/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="accessories/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <Link
                to="wirelessearbuds"
              >
                Wireless EarBurds
              </Link>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="wirelessearbuds/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="wirelessearbuds/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="wirelessearbuds/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="wirelessearbuds/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="wirelessearbuds/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="wirelessearbuds/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
            <li className="relative group/showli">
              <a
                href="gaming"
              >
                Gaming
              </a>
              <ul className="hidden absolute top-6 bg-white z-30 group-hover/showli:flex flex-col border">
                <Link to="gaming/apple" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Apple</Link>
                <Link to="gaming/samsung" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Samsung</Link>
                <Link to="gaming/infinix" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Infinix</Link>
                <Link to="gaming/xiamoi" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Xiamoi</Link>
                <Link to="gaming/realme" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">Realme</Link>
                <Link to="gaming/techno" className="font-semibold text-base px-8 py-2 hover:bg-darkgrey hover:text-white cursor-pointer">techno</Link>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
