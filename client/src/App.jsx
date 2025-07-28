import { Route, Routes } from "react-router-dom";
import React, { useState } from "react"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {

  return (
 <div className="min-h-screen bg-white">
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
</div>
  )
}

export default App