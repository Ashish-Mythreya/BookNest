import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const userRole = sessionStorage.getItem("role");

  
  if (userRole !== role) {
    alert("Access Denied: Unauthorized User");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
