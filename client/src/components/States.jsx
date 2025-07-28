

import React, { useState, useEffect } from 'react'

const States = () => {
    const [stats, setStats] = useState({
    licenses: 0,
    schools: 0,
    verifications: 0
    });

useEffect(() => {
const animateStats = () => {
const targets = { licenses: 25000, schools: 150, verifications: 1000 };
const duration = 2000;
const steps = 60;
const stepDuration = duration / steps;
let currentStep = 0;
const interval = setInterval(() => {
currentStep++;
const progress = currentStep / steps;
setStats({
licenses: Math.floor(targets.licenses * progress),
schools: Math.floor(targets.schools * progress),
verifications: Math.floor(targets.verifications * progress)
});
if (currentStep >= steps) {
clearInterval(interval);
}
}, stepDuration);
};
const timer = setTimeout(animateStats, 500);
return () => clearTimeout(timer);
}, []);

  return (
<section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div className="p-6">
    <div className="text-4xl font-bold text-blue-600 mb-2">
    {stats.licenses.toLocaleString()}+
    </div>
    <div className="text-gray-600 text-lg">Licenses Processed</div>
    </div>
    <div className="p-6">
    <div className="text-4xl font-bold text-blue-600 mb-2">
    {stats.schools}+
    </div>
    <div className="text-gray-600 text-lg">Driving Schools</div>
    </div>
    <div className="p-6">
    <div className="text-4xl font-bold text-blue-600 mb-2">
    {stats.verifications.toLocaleString()}+
    </div>
    <div className="text-gray-600 text-lg">Verifications Daily</div>
    </div>
    </div>
    </div>
</section>
  )
}

export default States