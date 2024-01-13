import BasketItem from "./BasketItem";
const Basket = ({basketItems}) => {

    const basketItemsAdded = basketItems.map((item) => {

    return <BasketItem key={item.id} item={item}/>
   })

    return ( 
        <>
        <h2>Basket</h2>
        {basketItemsAdded}
        </>
     );
}
 
export default Basket ;