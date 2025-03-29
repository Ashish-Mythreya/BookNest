import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/books");
        console.log("Books Data: ", response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <div className="dashboard">
        <h2>Book Collection</h2>

        {/* Book Grid */}
        <div className="book-list">
          {books.map((book, index) => (
            <div key={`${book.id}-${index}`} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ₹{book.price}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
