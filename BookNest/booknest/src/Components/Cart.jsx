import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2 className="cart-head">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="error">Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={() => navigate("/user-details")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
