import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/order-history.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const role = sessionStorage.getItem("role");
        const userEmail = sessionStorage.getItem("email");

        let response;
        if (role === "admin") {
          
          response = await axios.get("http://localhost:9000/api/orders");
        } else {
          
          response = await axios.get(
            `http://localhost:9000/api/orders/user/${userEmail}`
          );
        }

        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again later.");
      }
    };

    fetchOrders();
  }, []);

  
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="order-history">
      <Header />
      <div className="order-history-container">
        <h2>Order History</h2>
        {error && <p className="error">{error}</p>}

        {currentOrders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          <div>
            {currentOrders.map((order) => (
              <div key={order.orderId} className="order-card">
                <h3>Order ID: {order.orderId}</h3>
                <p>
                  <strong>Name:</strong> {order.name}
                </p>
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {order.mobile}
                </p>
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
                <p>
                  <strong>Total Amount:</strong> ₹{order.totalAmount}
                </p>
                <p>
                  <strong>Items:</strong> {order.orderDetails}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            ))}

            
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
