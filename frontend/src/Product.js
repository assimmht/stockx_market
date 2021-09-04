import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, releaseDate, urlKey }) {

 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
 const [state, dispatch] = useStateValue();
    
 const ajouteraupanier = () => {

   // envoyer l'élément dans la couche de données (data layer)

   dispatch({
       type: 'ADD_TO_BASKET',
       item: {
           id: id,
           title: title,
           image: image,
           price: price,
           releaseDate: releaseDate,
           urlKey: urlKey
       },
   });

 };

    return (
        <Link to={{
            pathname: "/detailproduct/"+urlKey,
            state: {urlKey: urlKey} 
          }} style={{ textDecoration: 'none' }}>
        <div className="product">
           <img src={image} />  
            <div className="product__info">
             <p>{title}</p>
              <p className="product__price">
                  <strong>€ {price}</strong>
              </p>
              <p className="product__releaseDate">
                  Sortie le {new Date(releaseDate).toLocaleDateString("fr-FR", options)}
              </p>
            <button onClick={ajouteraupanier} className="product__button">Ajouter au panier</button>
            </div>
        </div>
        </Link>
    )
}

export default Product
