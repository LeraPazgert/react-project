import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { HomePage } from './components/LoginPage/HomePage';
import { Products } from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Edit from './components/Edit/Edit';
import './index.css'
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from './components/PageNotFound';
import Addition from './components/Add/Addition';
import Order from './components/Order/Order';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={['/login', '/']} exact>
            <HomePage title='Login to the shop' />
          </Route>
          <Route>
            <Navbar />
            <Switch>
              <Route path='/catalog' exact>
                <Addition />
                <Products />
              </Route>
              <Route path="/productPage" component={ProductPage} />
              <Route path="/cart" component={Cart} />
              <Route component={PageNotFound} />
            </Switch>
          </Route>
        </Switch>
        <Modal />
        <Edit />
        <Order/>
      </div>
    </BrowserRouter>
  );
}
export default App;
