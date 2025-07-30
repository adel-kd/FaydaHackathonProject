import React from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  const handleDownloadClick = () => {
    alert("📄 Detailed PDF documentation coming soon!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        API Documentation for Legal Entities
      </h1>

      <section className="mb-8 text-center">
        <button
          onClick={handleDownloadClick}
          className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition"
        >
          📥 Download Detailed PDF
        </button>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Overview</h2>
        <p>
          This API enables licensed institutions (e.g. banks, insurance companies, and government agencies)
          to securely verify users’ digital identity using the Fayda authentication system. Integration
          is handled via OAuth 2.0, with secure JWT-based authentication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Base URL</h2>
        <code className="block bg-gray-100 p-3 rounded">
          https://api.idverify.et
        </code>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Authentication Flow</h2>
        <ol className="list-decimal list-inside leading-relaxed">
          <li>Redirect user to Fayda Authorization Endpoint with their FIN.</li>
          <li>User receives and enters OTP sent to their phone.</li>
          <li>Fayda returns an authorization code to your redirect URI.</li>
          <li>Backend exchanges the code for an access token (via JWT).</li>
          <li>Use the access token to retrieve user info.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Endpoints</h2>

        <div className="mb-4">
          <h3 className="font-bold">1. /authorize</h3>
          <p>Redirect users for identity verification.</p>
          <code className="block bg-gray-100 p-3 rounded mt-1 text-sm">
            GET https://esignet.ida.fayda.et/authorize
          </code>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">2. /token</h3>
          <p>Exchange authorization code for an access token.</p>
          <code className="block bg-gray-100 p-3 rounded mt-1 text-sm">
            POST https://esignet.ida.fayda.et/v1/esignet/oauth/v2/token
          </code>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">3. /userinfo</h3>
          <p>Retrieve authenticated user details (name, age, photo, etc).</p>
          <code className="block bg-gray-100 p-3 rounded mt-1 text-sm">
            GET https://esignet.ida.fayda.et/v1/esignet/oidc/userinfo
          </code>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Sample JWT Payload</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "iss": "your-client-id",
  "sub": "your-client-id",
  "aud": "https://esignet.ida.fayda.et/v1/esignet/oauth/v2/token",
  "exp": 1712345678,
  "iat": 1712341234,
  "jti": "unique-token-id"
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Security</h2>
        <ul className="list-disc list-inside leading-relaxed">
          <li>All requests must be made over HTTPS.</li>
          <li>Tokens are short-lived and signed using RS256 algorithm.</li>
          <li>Institutions must protect their private keys and client secrets.</li>
          <li>Ensure CORS and CSRF protections for frontend apps.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-600 mb-2">Support</h2>
        <p>
          For onboarding, technical questions, or production access, please
          contact our API team at <a className="text-blue-600 underline" href="mailto:support@idverify.et">support@idverify.et</a>
        </p>
      </section>

      <div className="mt-10 text-sm text-gray-500 text-center">
        <Link to="/" className="underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Docs;
