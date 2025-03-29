package com.bookstore.service;

import com.bookstore.entity.CustomerOrder;
import com.bookstore.repository.CustomerOrderRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {

    private final CustomerOrderRepository customerOrderRepository;

    public CustomerOrderServiceImpl(CustomerOrderRepository customerOrderRepository) {
        this.customerOrderRepository = customerOrderRepository;
    }

    @Override
    public CustomerOrder saveOrder(CustomerOrder order) {
        return customerOrderRepository.save(order);
    }

    @Override
    public List<CustomerOrder> getOrdersByUser(String email) {
        return customerOrderRepository.findByCustomerEmail(email);
    }
}
