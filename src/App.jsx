import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Cart from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import Productdetail from "./pages/Productdetail";
import Filtercategory from "./pages/Filtercategory";
import Myaccount from "./pages/Myaccount";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logintrue } from "./redux/Login/userlogin";

function App() {
  const selector = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  // function that get value from localstorage and if get its do login true and if user reload the page user doesnt automatically logout
  useEffect(() => {
    if (localStorage.getItem("username")) {
      dispatch(logintrue());
    }
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="myaccount" element={<Myaccount />} />
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="category/:name/:prodname" element={<Productdetail />} />
          <Route path="category/:name" element={<Filtercategory />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
