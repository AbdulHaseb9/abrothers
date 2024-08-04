import React, { useState } from "react";
import SignImages from "../assets/images/sideimage.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logintrue } from "../redux/Login/userlogin";
import { useDispatch, useSelector } from "react-redux";

export const Signin = () => {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  // const [getuser, setgetuser] = useState();

  // const selector = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    try {
      e.preventDefault();
      const api = await fetch("https://abrotherbackend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      });
      console.log(api.status);
      const resp = await api.json();


      if (api.status >= 350) {
        return toast.error(resp)
      } else {
        toast.success("Login sucessfully");
        localStorage.setItem("username", JSON.stringify(resp));
        dispatch(logintrue());
        navigate("/");
      }

    } catch (error) {
      toast.error("error");
    }
  };

  return (
    <div className="py-7 flex flex-col md:flex-row gap-7 md:gap-0">
      <Toaster />
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={SignImages}
          alt="Signup Images"
          className="md:h-[500px] w-full md:object-cover lg:object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-72">
          <h3 className="text-2xl font-semibold">Log in to Exclusive</h3>
          <p className="text-sm font-semibold my-2">Enter your details below</p>
          <form onSubmit={handlelogin}>
            <input
              type="text"
              required
              onChange={(e) =>
                setlogindata({ ...logindata, email: e.target.value })
              }
              placeholder="Email or Phone Number"
              className="my-4 w-72 border-b outline-none text-darkgrey"
            />
            <input
              type="password"
              onChange={(e) =>
                setlogindata({ ...logindata, password: e.target.value })
              }
              placeholder="Password"
              className="my-4 w-72 border-b outline-none text-darkgrey"
              required
            />
            <div className="flex justify-between items-center">
              <input
                type="submit"
                value={"Login"}
                className="w-24 text-white bg-reddish text-sm px-3 py-2.5 text-center me-2 mb-2 rounded-sm cursor-pointer"
              />
              <p className="text-reddish text-sm text-center cursor-pointer">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
