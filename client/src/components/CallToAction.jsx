

import React from 'react'

const CallToAction = () => {
  return (
<section className="bg-blue-600 py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
Smart Driver's License Management
</h2>
<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
Apply, verify, and manage your license easily — all in one place.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-blue-600 px-8 py-4 !rounded-button text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
Apply Now
</button>
<button className="border-2 border-white text-white px-8 py-4 !rounded-button text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
Verify License
</button>
</div>
</div>
</section>
  )
}

export default CallToAction