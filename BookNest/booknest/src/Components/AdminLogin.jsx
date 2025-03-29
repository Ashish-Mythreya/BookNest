import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin-login.css";

const AdminLogin = () => {
  const uname = useRef();
  const upwd = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleAdminLogin = () => {
    if (uname.current.value === "admin" && upwd.current.value === "admin123") {
      sessionStorage.setItem("role", "admin");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid Admin Credentials");
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <input ref={uname} placeholder="Username" />
        <input ref={upwd} type="password" placeholder="Password" />
        <button onClick={handleAdminLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;