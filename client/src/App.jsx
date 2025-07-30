import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Callback from "./Callback";
import Temporary from "./pages/temporary";    
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
const location = useLocation();
  return (
 <div className="min-h-screen bg-white">
  {location.pathname !== "/admin" && <Navbar />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/temporary" element={<Temporary />} />
    </Routes>
    {location.pathname !== "/admin" && <Footer />}
</div>
  )
}

export default App