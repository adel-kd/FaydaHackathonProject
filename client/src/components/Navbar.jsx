import { Link } from "react-router-dom"


const Navbar = () => {
  return (
<header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
    <div className="flex items-center">
    <div className="flex-shrink-0">
    <Link to="/" className="cursor-pointer">
    <span className="text-2xl font-bold text-blue-600">License</span>
    </Link>
    </div>
    </div>
    <nav className="hidden md:flex space-x-8">
    <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Home</Link>
    <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Services</Link>
    <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">About</Link>
    <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Contact</Link>
    </nav>
    <div className="flex items-center space-x-4">
    <Link to="/signin">
      <button className="bg-blue-600 text-white px-4 py-2 !rounded-button text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
        Sign In
      </button>
    </Link>
    </div>
    </div>
    </div>
</header>
  )
}

export default Navbar