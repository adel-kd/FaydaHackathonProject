import express from "express";
import cors from "cors";
import veriFayda from "./veriFayda.js";


// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// OIDC callback endpoint
app.post("/api/auth/callback", veriFayda)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
