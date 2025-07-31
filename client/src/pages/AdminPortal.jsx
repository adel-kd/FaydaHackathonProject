import { useState } from "react";
import axios from "axios";

export default function AdminPortal() {
  const [name, setName] = useState("");
  const [subdomain, setSubdomain] = useState("");

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:5000/api/admin/register", { name });
    setSubdomain(res.data.subdomain);
  };

  return (
    <div className="p-6">
      <h2>Register a New Driving School</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="School Name" />
      <button onClick={handleRegister}>Generate Portal</button>
      {subdomain && <p>Generated subdomain: <b>{subdomain}</b></p>}
    </div>
  );
}
