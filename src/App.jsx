// import { useSearchParams } from "react-router-dom";
// import CategoryBar from "../component/CategoryBar";
// import HeroCarousel from "../component/HeroCarousel";
// import ProductCard from "../component/ProductCard";
// import Products from "../data/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;