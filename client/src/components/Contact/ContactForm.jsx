

import React, { useState } from 'react'

const ContactForm = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "general",
          message: "",
        });
      }, 3000);
    }
  };

  return (
 <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
            </h2>

            {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                <p className="text-green-800">
                    Thank you for your message! We'll get back to you within
                    24 hours.
                </p>
                </div>
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
                >
                Full Name *
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm`}
                placeholder="Enter your full name"
                />
                {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
            </div>

            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
                >
                Email Address *
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm`}
                placeholder="Enter your email address"
                />
                {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            <div>
                <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
                >
                Subject
                </label>
                <div className="relative">
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white cursor-pointer"
                >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                </select>
                <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
            </div>

            <div>
                <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
                >
                Message *
                </label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none`}
                placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                    {errors.message}
                </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 !rounded-button text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
                Send Message
            </button>
            </form>
        </div>

        {/* Company Information */}
        <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Company Information
            </h2>

            <div className="space-y-6">
                <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                    Office Address
                    </h3>
                    <p className="text-gray-600">
                    123 Government Plaza
                    <br />
                    Digital Services Building
                    <br />
                    Tech City, TC 12345
                    </p>
                </div>
                </div>

                <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-green-600"></i>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                    Phone Number
                    </h3>
                    <a
                    href="tel:+1-555-123-4567"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                    +1 (555) 123-4567
                    </a>
                </div>
                </div>

                <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-purple-600"></i>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                    Email Address
                    </h3>
                    <a
                    href="mailto:info@fayda.gov"
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                    info@fayda.gov
                    </a>
                </div>
                </div>

                <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-orange-600"></i>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                    Office Hours
                    </h3>
                    <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default ContactForm