package com.example.RainforestRetail.controllers;

import com.example.RainforestRetail.models.Order;
import com.example.RainforestRetail.services.ProductOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/productOrders")
public class ProductOrderController {
    @Autowired
    ProductOrderService productOrderService;

    {}

//    @PostMapping //check restful routes, specifically @PathVariable being used in a PostMapping
//    public ResponseEntity<Order> createProductOrder (@RequestBody HashMap<Long , Integer> basket, @PathVariable long userId) {
//        Order order = productOrderService.createNewProductOrder(basket, userId);
//                return new ResponseEntity<>(order, HttpStatus.CREATED);
//    }

}
