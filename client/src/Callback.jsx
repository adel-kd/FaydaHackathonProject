import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log("👉 Got code from VeriFayda:", code);

    if (code) {
      axios
        .post("/api/auth/callback", { code }) // ✅ This goes through Vite proxy now
        .then((res) => {
          console.log("✅ Token from server:", res.data.token);
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error("❌ Error during callback:", err.response?.data || err.message);
        });
    }
  }, []);

  return <div>Authenticating...</div>;
}

export default Callback;
