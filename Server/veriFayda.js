import 'dotenv/config';
import jwt from "jsonwebtoken";
import axios from "axios";
import { importJWK, SignJWT } from "jose";

const veriFayda = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Missing code" });
  }

  try {
    // Parse your private key (base64 encoded JSON)
    const jwkJson = JSON.parse(Buffer.from(process.env.PRIVATE_KEY, "base64").toString("utf-8"));
    const privateKey = await importJWK(jwkJson, process.env.ALGORITHM);

    // Generate a signed client_assertion JWT
    const clientAssertion = await new SignJWT({
      iss: process.env.CLIENT_ID,
      sub: process.env.CLIENT_ID,
      aud: process.env.TOKEN_ENDPOINT,
      jti: Math.random().toString(36).substring(2),
    })
      .setProtectedHeader({ alg: process.env.ALGORITHM, kid: jwkJson.kid })
      .setIssuedAt()
      .setExpirationTime("5m")
      .sign(privateKey);

    // Exchange the code for tokens
    const response = await axios.post(
      process.env.TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        client_assertion_type: process.env.CLIENT_ASSERTION_TYPE,
        client_assertion: clientAssertion,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { id_token, access_token } = response.data;

    // Decode the ID token to get user info
    const user = jwt.decode(id_token);

    // Optionally: Save user to DB here (MongoDB/MySQL)

    // Generate your own app session token
    const appToken = jwt.sign(
      { sub: user.sub, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token: appToken, user });
  } catch (err) {
    console.error("Token exchange error:", err.message);
    return res.status(500).json({ error: "OIDC token exchange failed" });
  }
};

export default veriFayda;
