import { useAuth } from "../../../Hook/useAuth.js";

//We are just testing the useAuth hook here
//This component will display user information if authenticated, otherwise show unauthorized message
const Dashboard = () => {
  const user = useAuth();

  if (!user) {
    return <p>Unauthorized</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>FIN: {user.sub}</p>
      <p>Birthdate: {user.birthdate}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone_number}</p>
    </div>
  );
}

export default Dashboard;