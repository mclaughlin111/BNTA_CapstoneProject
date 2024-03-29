package com.example.RainforestRetail.controllers;

import com.example.RainforestRetail.models.Order;
import com.example.RainforestRetail.models.ProductOrder;
import com.example.RainforestRetail.services.OrderService;
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

    @Autowired
    OrderService orderService;

}
