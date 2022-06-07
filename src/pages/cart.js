
import React, {useContext} from 'react'
import ProductCard from '../component/ProductCard';
import { CartContext } from '../assets/data/cartContext';
import '../Styles/cart.css';
import buy from "../assets/images/gobackbuy.jpg"
import {Link} from 'react-router-dom'


function CartPage() {
  const {cartItem} = useContext(CartContext)
  
  const cartIsEmpty = cartItem.length <=0 ? true : false;

  const totalAmount = cartItem.reduce((total, product)=>{
    return total += product.price*product.quantity
  },0)

  return (
    
    <div className="CartPage">
      {
        cartIsEmpty &&
        <div className="empty">
          <h1>No Product is added.</h1>
          <p>Click below to shop！</p>
          <Link to='/Category'>
          <img src={buy} alt=''/>
          </Link>
        </div>
      }
      {
        !cartIsEmpty &&
        <>
          <div className="header">
            <h1>購物車</h1>
          </div>
          <div className="list">
            {cartItem.map((product)=>(
              <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  currency={product.currency}
                  img={product.img}
                  colors={product.colors}
                  size={product.size}
                  slug={product.slug}
                  add={false}
                  quan={false} />
            ))}
          </div>
          <div className="amount">
            <p>Total amount : $ {totalAmount}</p>
            <button>CHECK OUT</button>
          </div>
        </>
      }

    </div>
  )
}

export default CartPage