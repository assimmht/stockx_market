import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function CartProduct({ id, title, image, price, releaseDate }) {

 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
 const [{basket}, dispatch] = useStateValue();
    
 const supprimerdupanier = () => {

   // envoyer l'élément dans la couche de données (data layer)

   dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id
   });

 };

    return (
        <div className="product">
           <img className="product__image" src={image} />  
            <div className="product__info">
             <p>{title}</p>
              <p className="product__price">
                  <strong>€ {price}</strong>
              </p>
              <p className="product__releaseDate">
                  Sortie le {new Date(releaseDate).toLocaleDateString("fr-FR", options)}
              </p>
            <button onClick={supprimerdupanier} className="product__button">Supprimer du panier</button>
            </div>
        </div>
    )
}

export default CartProduct
