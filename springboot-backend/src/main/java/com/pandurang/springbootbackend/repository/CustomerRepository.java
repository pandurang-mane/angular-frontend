package com.pandurang.springbootbackend.repository;

import com.pandurang.springbootbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
