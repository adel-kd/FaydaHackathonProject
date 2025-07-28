

import React from 'react'

const Features = () => {
  return (
<section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Comprehensive License Management
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
     Smartly managing Ethiopia’s driver’s licenses — digital, centralized, and verified in real time.
    </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-2xl hover:transform hover:scale-105 shadow-lg hover:shadow-xl transition-all cursor-pointer">
    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
    <i className="fa-solid fa-cloud text-2xl text-blue-600"></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Storage</h3>
    <p className="text-gray-600 leading-relaxed">
    Securely store and manage all license information in the cloud with advanced encryption and backup systems for maximum data protection.
    </p>
    </div>
    <div className="bg-white p-8 rounded-2xl hover:transform hover:scale-105
    shadow-lg hover:shadow-xl transition-all cursor-pointer">
    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
    <i className="fas fa-shield-alt text-2xl text-green-600"></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Verification</h3>
    <p className="text-gray-600 leading-relaxed">
    Real-time license verification that guarantees authenticity, enhances security, and stops fraud instantly.
    </p>
    </div>
    <div className="bg-white p-8 rounded-2xl hover:transform hover:scale-105 shadow-lg hover:shadow-xl transition-all cursor-pointer">
    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
    <i className="fas fa-chart-line text-2xl text-purple-600"></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Status Tracking</h3>
    <p className="text-gray-600 leading-relaxed">
    Stay informed with smart tracking of license progress, renewals, and expirations — powered by real-time analytics and auto notifications.
    </p>
    </div>
    </div>
    </div>
</section>
  )
}

export default Features