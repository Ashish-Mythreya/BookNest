import { useNavigate } from "react-router-dom";
import "../styles/home.css";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to BookNest</h1>
      <button onClick={() => navigate("/admin-login")}>Admin Login</button>
      <button onClick={() => navigate("/customer-login")}>Customer Login</button>
    </div>
  );
};

export default Home;
