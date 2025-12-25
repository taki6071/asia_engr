import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./pages/About";
import Products from "./pages/Products";
import BrandPage from "./pages/BrandPage";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Contacts from "./pages/Contacts";

import CarDetails from "./pages/CarDetails";


function App() {
  return (
    <div>
      <Navbar />

      <div className="pt-18">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:brand" element={<BrandPage />} />
          <Route path="/products/:brand/:id" element={<CarDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />


        </Routes>
      </div>

      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default App;
