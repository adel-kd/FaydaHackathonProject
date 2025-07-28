import { useNavigate } from "react-router-dom"
import hero_img from "../assets/hero-image.png"
import mobile_hero_img from "../assets/mobile.jpg"
const Hero = () => {
  const navigate = useNavigate()

  return (
<section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
    <div className="absolute inset-0">
    <img
    src={hero_img}
    alt="Hero Background"
    className="w-full h-full object-cover object-top opacity-20"
    />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div className="text-center lg:text-left">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
    Digital
    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Driver's License</span>
    <br />Management System
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
    Streamline license renewals, track applications, and verify credentials with our comprehensive digital platform designed for modern government services.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
    <button onClick={() => navigate("/signin")} className="bg-blue-600 text-white px-8 py-4 !rounded-button text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
      Sign In
    </button>
    <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 !rounded-button text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
    Learn More
    </button>
    </div>
    </div>
    <div className="relative">
    <img
    src={mobile_hero_img}
    alt="License Interface"
    className="w-full max-w-md mx-auto h-auto object-cover object-top rounded-2xl shadow-2xl"
    />
    </div>
    </div>
    </div>
</section>
  )
}

export default Hero