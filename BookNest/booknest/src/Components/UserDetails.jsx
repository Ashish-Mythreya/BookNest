import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/user-details.css";

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    const { name, email, mobile, address } = user;
    if (!name || !email || !mobile || !address) {
      return "All fields are required.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Invalid email format.";
    }
    if (!/^\d{10}$/.test(mobile)) {
      return "Mobile number must be 10 digits.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    sessionStorage.setItem("userDetails", JSON.stringify(user));
    navigate("/cart-payment");
  };

  return (
    <div className="user-details">
      <h2>Enter Your Details</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {Object.keys(user).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={user[key]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Continue to Payment</button>
      </form>
    </div>
  );
};

export default UserDetails;
