import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
const location = useLocation();
  return (
 <div className="min-h-screen bg-white">
  {location.pathname !== "/signin" && <Navbar />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {location.pathname !== "/signin" && <Footer />}
</div>
  )
}

export default App