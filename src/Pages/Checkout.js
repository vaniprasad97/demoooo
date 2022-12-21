import React from 'react'
import { useStateValue } from 'components/StateProvider';
import 'styles/checkout.css';
import CheckoutProduct from 'components/CheckoutProduct.js';

function Checkout() {
    const [{basket }] = useStateValue(); 
  return (
    <div className='checkout'>
   {basket?.length === 0  ? (
    <div>
      <h2> your shopping basket is empty</h2>
      <p> no items in  basket.</p>
      </div>
  ) : (
    <div>
      <h2 className='checkout__title'> your shopping basket</h2>
      {/* list of all checkout products */}
      {basket?.map(item =>
      
      <CheckoutProduct
      id = {item.id}
      title ={item.title}
      image= {item.image}
      price ={ item.price}
      rating = {item.rating}

       />
        )}


    </div>
  )}
  </div>
  );
}

export default Checkout;