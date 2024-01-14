const BasketItem = ({item, products}) => {
  const product = products.find((product) => product.id === item);

  if (!product) {
    console.error(`Product with ID ${item} not found.`);
    return null; // Skip rendering this item if product not found
  }


    return (
      <>
      <ol>
        <li>{product.name}</li>
        </ol>
        </>
      );
}
 
export default BasketItem;