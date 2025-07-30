export default function Temporary() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-2">🛠️ Technical Overview</h1>
      <p className="text-gray-700">
        This system is designed for government use to manage and control driving training schools, their trainees, and license issuance. It centralizes processes that are often fragmented and improves transparency, accuracy, and efficiency.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🧱 How the System Works (Wireframe Flow)</h2>
        <p className="mb-2">
          - Training schools register through a **private onboarding system**.  
          - When approved, the system **automatically generates a subdomain portal** for each school (e.g., `schoolname.smartdrive.gov.et`).  
          - School admins use their portal to **register students**, manage attendance, and schedule exams.  
          - Before issuing a license, the system uses **Fayda eSignet** to authenticate trainees and fetch their verified identity.  
          - Once verified, students are certified and issued a digital or physical license.
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono whitespace-pre">
{`
[User Registers Training School]
        ↓
[System auto-generates subdomain portal]
        ↓
[Admin login to dashboard]
        ↓
[Add students → Manage attendance → Send to exam]
        ↓
[Before Certification → User ID Verified by eSignet]
        ↓
[Fetch name, age, photo from Fayda DB]
        ↓
[User Certified + License Issued]
`}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔐 eSignet Integration</h2>
        <p className="mb-2">
          The system integrates with **Fayda’s eSignet** API for secure and reliable identity verification. Authentication is done using **FIN (Federal Identification Number)** and **OTP**.
        </p>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ eSignet authentication is implemented and tested separately.</li>
          <li>📍 The integration is currently placed in a temporary test route for demonstration purposes.</li>
          <li>🔗 Later, it will be merged into the certification step for real student verification.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📊 Current Status</h2>
        <table className="table-auto border border-gray-300 text-left w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Feature</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">School Registration in Private</td>
              <td className="border px-4 py-2">✅ Completed</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Subdomain Generation</td>
              <td className="border px-4 py-2">✅ Completed</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Admin Panel</td>
              <td className="border px-4 py-2">🛠️ In Progress</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eSignet (Fayda) Authentication</td>
              <td className="border px-4 py-2">✅ Working in test route</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Student Management</td>
              <td className="border px-4 py-2">🛠️ In Progress</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Final Certification Flow</td>
              <td className="border px-4 py-2">🔜 Pending Integration</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
