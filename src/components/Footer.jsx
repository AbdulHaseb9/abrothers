import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-6 lg:px-8 py-8 grid md:grid-cols-4 gap-9 md:gap-0">
      <div className="md:flex md:justify-center">
        <div>
          <h3 className="text-xl font-bold">Exclusive</h3>
          {/* <h4>Subscribe</h4> */}
          <p className="text-sm py-2 text-footercolor">
            Get 20% off on your first order
          </p>
          <div className="border flex items-center w-40 rounded-sm">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-32 bg-transparent text-sm py-1 px-2 text-darkgrey outline-none"
            />
            <FaArrowCircleRight className="white" />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div>
          <h3 className="text-xl font-bold">Support</h3>
          <ul>
            <li className="text-sm py-2 text-footercolor">
              Ghouri town Phase III <br /> Islamabad , Pakistan
            </li>
            <li className="text-sm py-2 text-footercolor">
              abrother@gmail.com
            </li>
            <li className="text-sm py-2 text-footercolor">+92 3131191977</li>
          </ul>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div>
          <h3 className="text-xl font-bold">Account</h3>
          <ul>
            <li className="my-2">
              <Link to={"myaccount"} className="text-sm text-footercolor">
                My Account
              </Link>
            </li>
            <li className="my-2">
              <Link to={"signup"} className="text-sm text-footercolor">
                Login / Register
              </Link>
            </li>
            <li className="my-2">
              <Link to={"cart"} className="text-sm text-footercolor">
                Cart
              </Link>
            </li>
            <li className="my-2">
              <a href="#" className="text-sm text-footercolor">
                Wishlist
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="text-sm text-footercolor">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul>
            <li className="my-2">
              <a href="#" className="text-sm text-footercolor">
                Privacy Policy
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="text-sm text-footercolor">
                Term of Use
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="text-sm text-footercolor">
                FAQ
              </a>
            </li>
            <li className="my-2">
              <Link to={"contact"} className="text-sm text-footercolor">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div>
      <div>
          <h3>Socials Links</h3>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaXTwitter  />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          </div>
        </div> */}
    </footer>
  );
};
