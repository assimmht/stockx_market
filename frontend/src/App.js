import './App.css';
import Header from './Header';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import { useStateValue } from './StateProvider';
import Cart from './Cart';
import DetailProduct from './DetailProduct';

function App() {

  const [{}, dispatch] = useStateValue();

  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
       <Route path="/cart">
         <Cart />
        </Route>
        <Route path="/detailproduct/:urlKey">
         <DetailProduct />
        </Route>
       <Route path="/">
        <Home />
       </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
