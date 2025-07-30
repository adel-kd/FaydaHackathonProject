import { Link, useNavigate } from "react-router-dom";
import blue_logo from "../assets/black.svg";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="text-sm text-white w-full border-b border-gray-500 shadow-stone-50">
        <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
          <p>
            Govermental License<span className="underline underline-offset-2"> Management</span>
          </p>
        </div>
      </div>

      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">
        <Link to="/" className="flex items-center">
          <img src={blue_logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold text-blue-500">SmartDriveGOV 🇪🇹</span>
        </Link>

        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          <li className="group">
            <Link to="/">Home</Link>
            <div className="bg-blue-600 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </li>
          <li className="group">
            <Link to="/about">About</Link>
            <div className="bg-blue-600 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </li>
          <li className="group">
            <Link to="/contact">Contact</Link>
            <div className="bg-blue-600 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </li>
          <li className="group">
            <Link to="/docs">Docs</Link>
            <div className="bg-blue-600 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </li>
        </ul>

        <button
          onClick={() => navigate("/signin")}
          className="md:inline hidden bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all"
        >
          Sign In
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 ${
            isOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link to="/home" className="text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm">
                Contact
              </Link>
            </li>
           
             <li>
              <Link to="/announcment" className="text-sm">
                Announcment
              </Link>
            </li>
             <li>
              <Link to="/exams" className="text-sm">
                Exams
              </Link>
            </li>
             <li>
              <Link to="/docs" className="text-sm">
                Docs
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

