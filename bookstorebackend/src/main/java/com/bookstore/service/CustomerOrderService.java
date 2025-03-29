package com.bookstore.service;

import com.bookstore.entity.CustomerOrder;
import java.util.List;

public interface CustomerOrderService {
    CustomerOrder saveOrder(CustomerOrder order);
    List<CustomerOrder> getOrdersByUser(String email);
}
