import React from 'react'
import "../styles/checkout.css";
import { useStateValue } from 'components/StateProvider';

function CheckoutProduct(props) {

  const [{basket},dispatch] = useStateValue(); 
  console.log(props.id,props.title)

const removeFromBasket = () =>
{
  //remove item from basket..
  dispatch({
    type : "REMOVE_FROM_BASKET",
    id:props.id,
  });

};

  return (
    <div className='checkoutProduct'> 
     <img className='checkoutProduct__image'   src ={props.image} alt =""/> 
    < div className = 'checkoutProduct__info'>
      <p className='checkoutProduct__title'> {props.title}</p>
      <p className='checkoutProduct__price'>
        <small> rs </small>
        <strong >{props.price }</strong>
      </p>
      <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map(() => (
              <p> *</p>
            ))}
        </div>
<button onClick={removeFromBasket}> Remove from basket</button>
    </div>
    
    </div>
   
  )
}

export default CheckoutProduct