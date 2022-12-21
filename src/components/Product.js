import React from "react";
import { useStateValue } from "./StateProvider";
import "styles/Product.css";


export default function Product(props) {
  const [{},dispatch] = useStateValue(); 

  const addToBasket = () =>
  {
 // add item to basket..
 dispatch({
  type: 'ADD_TO_BASKET',
  item :
  {
    id : props.id,
    title : props.title,
    image : props.image,
    price  : props.price,
    rating : props.rating
  }
 })
  }

  return (
    <div className="product">
     

      <img src={props.image} alt=""></img>
      <div className="product__info">
        <p>{props.id}</p>
        <p>{props.title}</p>
        

        <p className="product__price">
          <small> Rs </small>
          <strong>{props.price} </strong>
        </p>
        
      </div>
      <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map(() => (
              <p> *</p>
            ))}
        </div>
       
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
