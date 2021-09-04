import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
             renderText={(value) =>(
                 <>
                 <p>
                     Total({basket.length} éléments): 
                     <strong className="subtotal__totalItem">{value}</strong>
                 </p>
                 <small className="subtotal__gift">
                  <input type="checkbox" />
                  Cette commande contient un cadeau
                 </small>
                 </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"€"}
            />
            <button>procéder au paiement</button>
        </div>
    )
}

export default Subtotal