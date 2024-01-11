package com.example.RainforestRetail.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;

@Entity(name="users")
@Table(name = "users") //May have to take name="users" away from line 7/8
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="address")
    private String address;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
//    @JsonIgnore may have to re-add if we get recursion issues
    private List<Order> orders;

    public User(String name, String email, String address){
        this.name = name;
        this.email = email;
        this.address = address;
        this.orders = new ArrayList<>();
    }

    public User() {

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
