const CompletedOrder = ({order}) => {

    if (!order || !order.productOrders || order.productOrders.length === 0) {
        return <p>Loading...</p>;
      }

    const eachOrder = order.productOrders.map((item) => (
        <li key={item.product.id}>Item: {item.product.name} | Quantity: {item.quantity}</li>));

    console.log(order);
    return ( 
        <div>
        <h2>Order Complete! 🥳</h2>
        <p>Order ID: {order.id}</p>
        <p>You ordered this at: {order.timeStamp}</p>  
        <ul>{eachOrder}</ul>
        </div>
     );
}
 
export default CompletedOrder;