package com.example.RainforestRetail.models;

public class ProductOrderingDTO {

    private long productId;
    private int quantity;
    private long OrderId;


    public ProductOrderingDTO(long productId, int quantity, long orderId) {
        this.productId = productId;
        this.quantity = quantity;
        OrderId = orderId;
    }

    public ProductOrderingDTO() {
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getOrderId() {
        return OrderId;
    }

    public void setOrderId(long orderId) {
        OrderId = orderId;
    }
}
