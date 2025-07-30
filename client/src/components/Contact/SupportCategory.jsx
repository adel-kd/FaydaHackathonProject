

import React from 'react'

const SupportCategory = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right support channel for your specific needs and get
              faster assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-tools text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technical Support
              </h3>
              <p className="text-gray-600 mb-6">
                Get help with system issues, login problems, or technical
                difficulties.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-phone text-blue-600 mr-3"></i>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    +251*******
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  <a
                    href="mailto:support@fayda.gov"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    support@smartdrive.gov
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-gray-500 mr-3"></i>
                  <span className="text-gray-600">Response: 2-4 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-exclamation-triangle text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Serious Issues
              </h3>
              <p className="text-gray-600 mb-6">
                Get assistance with serious issues that require immediate
                attention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-phone text-green-600 mr-3"></i>
                  <a
                    href="tel:+1-555-987-6543"
                    className="text-green-600 hover:text-green-800 cursor-pointer"
                  >
                    +251*******
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-green-600 mr-3"></i>
                  <a
                    href="mailto:seriousIssues@fayda.gov"
                    className="text-green-600 hover:text-green-800 cursor-pointer"
                  >
                    seriousIssues@smartdrive.gov
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-gray-500 mr-3"></i>
                  <span className="text-gray-600">Response: 1-2 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-question-circle text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                General Questions
              </h3>
              <p className="text-gray-600 mb-6">
                Get answers to common questions or general information about our
                services.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-book text-purple-600 mr-3"></i>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 cursor-pointer"
                  >
                    FAQ Section
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-purple-600 mr-3"></i>
                  <a
                    href="mailto:info@fayda.gov"
                    className="text-purple-600 hover:text-purple-800 cursor-pointer"
                  >
                    info@smartdrive.gov
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-gray-500 mr-3"></i>
                  <span className="text-gray-600">Response: 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SupportCategory