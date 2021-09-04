import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://stockx-sneaker-analysis.s3.amazonaws.com/wp-content/uploads/2017/03/stockx-sneaker-stock-market-closet-full-of-cash.jpeg" 
            />
            </Link>

           <div className="header__search">
               <input 
                 className="header__searchInput"
                 type="text"
               />
               <SearchIcon className="header__searchIcon" />
           </div>
           <div className="header__nav">
               <div className="header__option">
                 <span className="header__optionLineTwo">
                    Mon Compte
                 </span>
               </div>
               <Link to="/cart" style={{ textDecoration: 'none' }}>
               <div className="header__optionBasket">
                 <ShoppingBasketIcon />
                 <span className="header__optionLineTwo header__optionbasketCount">
                 {basket?.length}
                 </span>
               </div>
               </Link>
           </div>
        </div>
    )
}

export default Header
