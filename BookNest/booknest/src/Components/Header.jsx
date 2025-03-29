import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleLogout = () => {
    sessionStorage.clear(); 
    navigate("/");
  };

  return (
    <header className="header">
      <h1>📚 BookNest</h1>
      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {sessionStorage.getItem("role") === "admin" && (
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        )}
        {sessionStorage.getItem("role") === "customer" && (
          <Link to="/order-history">Order History</Link>
        )}
        <button className="logout"onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
