package com.example.RainforestRetail.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.Length;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "products")
@Table
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "product_info", length = 1000)
    private String productInfo;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_type")
    private ProductType productType;

    @Column(name = "price")
    private double price;

    @Column(name = "stock")
    private int stock;

    @OneToMany(mappedBy = "products")
    @JsonIgnoreProperties({"products"})
    @JsonIgnore
    List<ProductOrder> productOrders;

    public Product() {
    }

    public Product(String name, ProductType productType, double price, int stock, String productInfo) {
        this.name = name;
        this.productType = productType;
        this.price = price;
        this.stock = stock;
        this.productOrders = new ArrayList<>();
        this.productInfo = productInfo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProductInfo() {
        return productInfo;
    }

    public void setProductInfo(String productInfo) {
        this.productInfo = productInfo;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public List<ProductOrder> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
        this.productOrders = productOrders;
    }
}
