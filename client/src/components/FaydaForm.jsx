import { useState } from "react";
import axios from "axios";

export default function FaydaForm() {
  const [fin, setFin] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/fayda/verify", {
        fin,
        otp,
      });
      setResult(res.data);
    } catch (err) {
      setResult({ error: "Verification failed. Please check your FIN and OTP." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Fayda Verification</h2>
      <input
        placeholder="Enter FIN"
        value={fin}
        onChange={e => setFin(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={e => setOtp(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleVerify}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
