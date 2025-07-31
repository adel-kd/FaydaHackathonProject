import { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "../components/SchoolCard";

export default function SubdomainDemo() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/schools").then(res => {
      setSchools(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h2>Registered Schools</h2>
      <div>
        {schools.map((s, i) => (
          <SchoolCard key={i} name={s.name} subdomain={s.subdomain} />
        ))}
      </div>
    </div>
  );
}
