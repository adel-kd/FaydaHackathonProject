import React from 'react'
import Plaza from '../../assets/plaza.jpg'

const Location = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us at our main office location in the heart of the digital
              services district.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20">
                 <img
                src={Plaza}
                alt="Fayda Office Building"
                className="w-full h-full object-cover object-top"
              />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fayda Headquarters
                </h3>
                <p className="text-gray-600 text-sm">
                  123 Government Plaza, Digital Services Building
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mt-2 cursor-pointer"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-car text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                  <p className="text-gray-600">
                    Free parking available in the underground garage. Visitor
                    parking spaces are located on levels B1 and B2.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-subway text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Public Transit
                  </h3>
                  <p className="text-gray-600">
                    Accessible via Metro Line 2 (Government Plaza Station) and
                    multiple bus routes. The building is wheelchair accessible.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-shield-alt text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-600">
                    Valid ID required for entry. Please check in at the main
                    reception desk on the ground floor before visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Location