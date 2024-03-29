import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfalse } from "../redux/Login/userlogin";
import toast, { Toaster } from "react-hot-toast";

export default function Myaccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("username");
    dispatch(loginfalse());
    toast.success("Logout Successfull");
    navigate("/");
  };

  return (
    <div className="flex justify-center py-12">
      <Toaster />
      <button
        onClick={() => logout()}
        className="bg-reddish px-4 py-1 text-white rounded-sm"
      >
        Logout
      </button>
    </div>
  );
}
