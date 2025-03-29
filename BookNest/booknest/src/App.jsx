import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import CustomerLogin from "./components/CustomerLogin";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import CartPayment from "./components/CartPayment";
import UserDetails from "./components/UserDetails";
import OrderHistory from "./components/OrderHistory";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CartProvider } from "./components/CartContext";

const App = () => (
  <CartProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Protected Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/user-details" element={
          <ProtectedRoute role="customer">
            <UserDetails />
          </ProtectedRoute>
        } />

        <Route path="/cart-payment" element={
          <ProtectedRoute role="customer">
            <CartPayment />
          </ProtectedRoute>
        } />

        <Route path="/order-history" element={
          <ProtectedRoute role="customer">
            <OrderHistory />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
