import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/cart-payment.css";

const CartPayment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleOrder = async () => {
    if (!userDetails || cart.length === 0) {
      alert("Error: Missing user details or cart items.");
      return;
    }

    const order = {
      ...userDetails,
      totalAmount: totalPrice,
      orderDetails: cart.map((item) => `${item.title} x 1`).join(", "),
    };

    try {
      await axios.post("http://localhost:9000/api/orders", order);
      clearCart();
      alert("Order placed successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error placing order. Please try again.");
      console.error("Order Error:", error);
    }
  };

  return (
    <div className="cart-payment">
      <h2 className="cart-payment-head">Confirm Your Order</h2>
      <p>Total: ₹{totalPrice}</p>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default CartPayment;
