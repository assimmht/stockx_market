import React from 'react';
import './Cart.css';
import CartProduct from './CartProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import img from './img/imgcart1.png';

function Cart() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="cart">
            <div className="cart__left">
              <img 
              src={img}
              className="cart__ad" />
              <div>
                  <h2 className="cart__title">
                   Votre panier d'achat
                  </h2>
                  {
                      basket.map(item => (
                          <CartProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           releaseDate={item.releaseDate}
                          />
                      ))
                  }
              </div>
            </div>
            <div className="cart__right">
              <Subtotal />
            </div>
        </div>
    )
}

export default Cart
