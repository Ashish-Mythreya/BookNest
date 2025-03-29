import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/admin-dashboard.css";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    stock: "",
    image: "" 
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const addBook = async () => {
    try {
      await axios.post("http://localhost:9000/api/books", newBook);
      setNewBook({ title: "", author: "", price: "", category: "", stock: "", image: "" });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const filteredBooks = books.filter(book =>
    (categoryFilter === "All" || book.category === categoryFilter) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      
      <div className="controls">
        <input type="text" placeholder="Search by title/author" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Autobiography">Autobiography</option>
        </select>
      </div>

      <div className="add-book-form">
        <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})} />
        <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})} />
        <input type="number" placeholder="Price" value={newBook.price} onChange={(e) => setNewBook({...newBook, price: e.target.value})} />
        <input type="text" placeholder="Category" value={newBook.category} onChange={(e) => setNewBook({...newBook, category: e.target.value})} />
        <input type="number" placeholder="Stock" value={newBook.stock} onChange={(e) => setNewBook({...newBook, stock: e.target.value})} />
        <input type="text" placeholder="Image URL" value={newBook.image} onChange={(e) => setNewBook({...newBook, image: e.target.value})} />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className={`book-card ${book.stock < 5 ? "low-stock" : ""}`}>
            {book.image ? (
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                />
              ) : (
                <p>No Image Available</p>
              )}
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p className={book.stock < 5 ? "low-stock-text" : ""}><strong>Stock:</strong> {book.stock} units</p>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
