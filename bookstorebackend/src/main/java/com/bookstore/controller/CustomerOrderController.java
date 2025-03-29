package com.bookstore.controller;

import com.bookstore.entity.CustomerOrder;
import com.bookstore.service.CustomerOrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerOrderController {

    private final CustomerOrderService customerOrderService;

    public CustomerOrderController(CustomerOrderService customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    @PostMapping("/place")
    public ResponseEntity<?> placeOrder(@RequestBody CustomerOrder order) {
        try {
            CustomerOrder savedOrder = customerOrderService.saveOrder(order);
            return ResponseEntity.ok(savedOrder);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error placing order: " + e.getMessage());
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<List<CustomerOrder>> getUserOrders(@PathVariable String email) {
        return ResponseEntity.ok(customerOrderService.getOrdersByUser(email));
    }
}
