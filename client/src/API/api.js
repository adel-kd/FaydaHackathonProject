


export const api =  async (email, password) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    console.log("Login successful:", response.data);
    // Redirect to dashboard or handle successful login
    navigate("/Registere-schools");
  } catch (error) {
    console.error("Login failed:", error);
  }
}