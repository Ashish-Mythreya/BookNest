package com.bookstore.service;

import com.bookstore.entity.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> getAllBooks();
    Optional<Book> getBookById(Integer id);
    Book saveBook(Book book);
    Book updateBook(Integer id, Book bookDetails);
    void deleteBook(Integer id);
}
