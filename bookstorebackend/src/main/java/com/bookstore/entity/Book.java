package com.bookstore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String author;
    private Double price;
    private String category;
    private Integer stock;

    @Column(columnDefinition = "TEXT")
    private String image;

    public Book() {}

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    @Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", author=" + author + ", price=" + price + ", category="
				+ category + ", stock=" + stock + ", image=" + image + ", getId()=" + getId() + ", getTitle()="
				+ getTitle() + ", getAuthor()=" + getAuthor() + ", getPrice()=" + getPrice() + ", getCategory()="
				+ getCategory() + ", getStock()=" + getStock() + ", getImage()=" + getImage() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public Book(Integer id, String title, String author, Double price, String category, Integer stock, String image) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.price = price;
		this.category = category;
		this.stock = stock;
		this.image = image;
	}

	public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}
