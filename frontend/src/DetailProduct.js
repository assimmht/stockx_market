import React, { useEffect, useState } from 'react';
import axios from './axios';
import './DetailProduct.css';
import { useParams } from "react-router-dom";


function DetailProduct() {

    const { urlKey } = useParams();

    const [productInfo, setProductInfo] = useState([]);

    const fetchData = async() => {
        await axios.get(`/detailproduct/${urlKey}`)
            .then((res)=>{
                setProductInfo(res.data.Product);
            })   
     }

    useEffect(() => {
        fetchData();
    });

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="detailProduct">
            <img src={productInfo.media['imageUrl']} />  
            <div className="detailProduct__info">
             <p className="detailProduct__title">{productInfo.title}</p>
             <p className="detailProduct__description">{productInfo.description}</p>
              <p className="detailProduct__price">
                  <strong>€ {productInfo.retailPrice}</strong>
              </p>
              <p className="detailProduct__releaseDate">
                  Sortie le {new Date(productInfo.releaseDate).toLocaleDateString("fr-FR", options)}
              </p>
            <button className="detailProduct__button">Ajouter du panier</button>
            </div>
        </div>
    )
}

export default DetailProduct
