package com.bookstore.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customer_orders")
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerEmail;
    private String customerName;
    private String address;
    private double totalPrice;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate = new Date(); // Automatically set order date

    public CustomerOrder() {}

    public CustomerOrder(String customerEmail, String customerName, String address, double totalPrice) {
        this.customerEmail = customerEmail;
        this.customerName = customerName;
        this.address = address;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCustomerEmail() { return customerEmail; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }

    public Date getOrderDate() { return orderDate; }
    public void setOrderDate(Date orderDate) { this.orderDate = orderDate; }
}
