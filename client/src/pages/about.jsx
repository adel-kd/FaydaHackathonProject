import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        About the Institution
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">Vision</h2>
        <p>
          To build a trusted, inclusive, and secure digital identity infrastructure that empowers
          all citizens to access public and private services seamlessly across Ethiopia.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">Mission</h2>
        <p>
          To deliver a reliable identity verification platform that upholds data privacy, promotes
          efficient service delivery, and supports Ethiopia’s digital transformation goals through
          national systems like Fayda.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">Core Values</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Transparency</li>
          <li>Accountability</li>
          <li>Security & Privacy</li>
          <li>Efficiency</li>
          <li>Inclusiveness</li>
          <li>Innovation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">Powers and Duties</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Regulate and oversee digital identity verification processes.</li>
          <li>Integrate with national identification systems such as Fayda.</li>
          <li>Ensure compliance with national data protection and cybersecurity laws.</li>
          <li>Support organizations in adopting secure authentication mechanisms.</li>
          <li>Promote accessibility and digital inclusion for all citizens.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-sky-600">Organizational Structure</h2>
        <p className="mb-2">
          The institution is structured for efficiency and accountability, with the following key
          departments:
        </p>
        <ul className="list-disc list-inside leading-relaxed">
          <li><strong>Director General’s Office:</strong> Strategic leadership and oversight.</li>
          <li><strong>Identity Services Department:</strong> User onboarding and eID integration.</li>
          <li><strong>Information Security Unit:</strong> Compliance and data protection.</li>
          <li><strong>Infrastructure & Development Team:</strong> Platform stability and growth.</li>
          <li><strong>Public Support Unit:</strong> User communication and training support.</li>
        </ul>
      </section>

      <div className="mt-10 text-sm text-gray-500 text-center">
        <Link to="/" className="underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
