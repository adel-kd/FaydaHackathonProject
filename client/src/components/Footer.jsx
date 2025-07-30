


import React from 'react'

const Footer = () => {
  return (
 <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
    <div className="col-span-1">
    <div className="flex items-center mb-4">
    <span className="text-2xl font-bold text-blue-400">SmartDriveGOV</span>
    </div>
    <p className="text-gray-400 leading-relaxed">
    Modernizing government services through innovative digital solutions for driver's license management.
    </p>
    </div>
    <div>
    <h4 className="text-lg font-semibold mb-4">Services</h4>
    <ul className="space-y-2 text-gray-400">
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">License Renewal</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Verification</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Status Tracking</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">School Management</a></li>
    </ul>
    </div>
    <div>
    <h4 className="text-lg font-semibold mb-4">Support</h4>
    <ul className="space-y-2 text-gray-400">
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
    <li><a href="#" className="hover:text-white transition-colors cursor-pointer">System Status</a></li>
    </ul>
    </div>
    <div>
    <h4 className="text-lg font-semibold mb-4">Connect</h4>
    <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
    <i className="fab fa-twitter text-xl"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
    <i className="fab fa-linkedin text-xl"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
    <i className="fab fa-facebook text-xl"></i>
    </a>
    </div>
    </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
    <p>&copy; 2025 SmartDriveGOV. All rights reserved. | Privacy Policy | Terms of Service</p>
    </div>
    </div>
</footer>
  )
}

export default Footer