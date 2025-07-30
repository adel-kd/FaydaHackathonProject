import { useState } from "react"
import { faqData } from "../assets/asset"
import faqs1_img from "../assets/FAQs2.avif"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

 return (
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
        <img
            className="max-w-sm w-full rounded-xl h-auto"
            src={faqs1_img}
            alt="FAQs illustration"
        />
        <div>
            <h1 className="text-3xl font-semibold">Frequently Asked Questions?</h1>
            <p className="text-sm text-slate-500 mt-2 pb-4">
                Get answers to the most common questions about Ethiopia’s digital driver’s license management system.
            </p>
            {faqData.map((faq, index) => (
                <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-slate-900 transition-all duration-500 ease-in-out">
                            {faq.question}
                        </h3>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                            <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FAQ