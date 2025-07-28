import { useState } from "react"
import { faqData } from "../assets/asset"


const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null)

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

 return (
<section className="bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Frequently Asked Questions
    </h2>
    <p className="text-xl text-gray-600">
    Get answers to the most common questions about Ethiopia’s digital driver’s license management system.</p>
    </div>
    <div className="space-y-4">
    {faqData.map((faq, index) => (
    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
    <button
    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
    onClick={() => toggleFaq(index)}
    >
    <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold text-gray-900 whitespace-normal">
    {faq.question}
    </h3>
    <i className={`fas fa-chevron-${faqOpen === index ? 'up' : 'down'} text-gray-500 ml-4 flex-shrink-0`}></i>
    </div>
    </button>
    {faqOpen === index && (
    <div className="px-6 pb-4 bg-gray-50">
    <p className="text-gray-600 leading-relaxed">
    {faq.answer}
    </p>
    </div>
    )}
    </div>
    ))}
    </div>
    </div>
</section>
  )
}

export default FAQ