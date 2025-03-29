import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customer-login.css";

const CustomerLogin = () => {
  const uname = useRef();
  const upwd = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleCustomerLogin = () => {
    if (uname.current.value === "customer" && upwd.current.value === "customer123") {
      sessionStorage.setItem("role", "customer"); // Store customer role
      navigate("/dashboard");
    } else {
      setError("Invalid Customer Credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
      {error && <p className="error">{error}</p>}
      <input ref={uname} placeholder="Username" />
      <input ref={upwd} type="password" placeholder="Password" />
      <button onClick={handleCustomerLogin}>Login</button>
    </div>
  );
};

export default CustomerLogin;
