package com.example.RainforestRetail.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity(name="orders")
@Table //(name="orders")
public class Order {


    @Transient
    @JsonIgnore// attribute created without table heading  // helpful for custom fields
    private ArrayList<ProductDTO> products;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name= "user_id")
    @JsonIgnoreProperties({"orders"})
    @JsonIgnore
    private User user;

    @Column(name="time_stamp")
    private LocalDateTime timeStamp;

    @OneToMany(mappedBy = "order")
    @JsonIgnoreProperties({"orders"})
    @JsonIgnore // ignored in DB to STOP recursion
    List<ProductOrder> productOrders;

    public Order(User user, LocalDateTime timeStamp){
        this.user = user;
        this.timeStamp = timeStamp;
        this.productOrders = new ArrayList<>(); // needed on backend
    }

    public Order() {
    }

    public ArrayList<ProductDTO> getProducts() {return this.products; }
    public void setProducts(ArrayList<ProductDTO> products) {
        this.products = products;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public List<ProductOrder> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
        this.productOrders = productOrders;
    }

    public void addToProductOrdersList(ProductOrder productOrder) {
        productOrders.add(productOrder);
    }
}
