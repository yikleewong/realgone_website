import './Styles/App.css';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import QnA from './pages/QnA'
import Category from './pages/Category'
import Contact from './pages/Contact'
import CartPage from './pages/cart'
import Member from './pages/member'
import Notfound from './pages/notfound'
import ProductInfo from './pages/ProductInfo';
import { CartContext } from './assets/data/cartContext';
import { useState } from 'react';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

function App() {

const [cartItem, setCartItem] = useState([])

  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={{cartItem, setCartItem}}>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Category" element={<Category/>} />
          <Route path="/product" element={<ProductInfo/>}>
            <Route path=":slug" element={<ProductInfo/>}/>
          </Route>
          <Route path="/QnA" element={<QnA/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/shopping-cart" element={<CartPage/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Footer />
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
