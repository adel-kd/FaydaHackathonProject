import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Callback from "./Callback";


const App = () => {
const location = useLocation();
  return (
 <div className="min-h-screen bg-white">
  {location.pathname !== "/admin" && <Navbar />}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    {location.pathname !== "/admin" && <Footer />}
</div>
  )
}

export default App