import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from './Product';
import img from './img_banner.png';
import axios from './axios';

function Home() {

    const [dataProduct, setDataProduct] = useState([]);

    const fetchData = async() => {
        await axios.get('/api/browse')
            .then((res)=>{
                setDataProduct(res.data.Products);
            })   
     }

    useEffect(() => {
        fetchData();
    });

    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src={img}
                />
                <div className="home__panel">
                    <h1>Future Sortie Sneaker</h1>
                    </div>
                {
                    dataProduct.map((item) => (
                        <Product id={item.id} title={item.title} image={item.media.imageUrl} 
                        price={item.retailPrice} releaseDate={item.releaseDate} urlKey={item.urlKey} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
