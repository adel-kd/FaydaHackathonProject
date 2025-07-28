import React from 'react'
import header_contact_image from '../../assets/contact-hero.jpg'

const Header = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="absolute inset-0">
          <img
            src={header_contact_image}
            alt="Contact Center Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with any questions or concerns. Reach out
            to us through the form below or contact us directly.
          </p>
        </div>
      </section>
  )
}

export default Header