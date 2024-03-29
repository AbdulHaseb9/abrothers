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

function App() {
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
          <Route path="checkout" element={<Checkout />} />
          <Route path="category/:name/:prodname" element={<Productdetail />} />
          <Route path="category/:name" element={<Filtercategory />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
