package com.example.RainforestRetail.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity(name = "product_orders")
@Table(name = "product_orders")
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties({"product_orders"})
    private Product products;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnoreProperties({"product_orders"})
    private Order order;

    public ProductOrder() {
    }

    public ProductOrder(int quantity, Product products, Order order) {
        this.quantity = quantity;
        this.products = products;
        this.order = order;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return products;
    }

    public void setProduct(Product products) {
        this.products = products;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
