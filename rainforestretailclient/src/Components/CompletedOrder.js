const CompletedOrder = ({order}) => {
    return ( 
        <div>
        <h2>Order Complete! 🥳</h2>
        <p>Order ID: {order.id}</p>
        <p>You ordered this at: {order.timeStamp}</p>
        
        </div>
     );
}
 
export default CompletedOrder;