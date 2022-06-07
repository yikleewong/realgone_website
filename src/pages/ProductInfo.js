import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import product from '../assets/data/product'
import { CartContext } from '../assets/data/cartContext';
import '../Styles/productInfo.css'

function ProductInfo() {

  let params = useParams()

  const [productDetail, setProductDetail] =useState(null)

  useEffect(() => {
    let productInfo = product.find((element)=>{
      return element.slug === params.slug
    })
    setProductDetail(productInfo)
  },[params.slug])

  const {cartItem, setCartItem} = useContext(CartContext)

  const productIndexInCart = cartItem.findIndex((element)=>{
    return element.id === productDetail.id
  })

  const [quantity, setquantity] = useState(
    (productIndexInCart===-1) ? 0 : cartItem[productIndexInCart].quantity
  );
  
  function addCart() {
    if(productIndexInCart===-1){
        setCartItem([
            {
                id:productDetail.id,
                title:productDetail.title,
                price:productDetail.price,
                currency:productDetail.currency,
                img:productDetail.img,
                colors:productDetail.colors,
                size:productDetail.size,
                quantity:1
            },
            ...cartItem
        ])
        window.alert("Added into your cart！")
    }
    else{
        const newCartArray = [...cartItem]
        newCartArray[productIndexInCart].quantity++
        setCartItem(newCartArray)
    }
    setquantity(quantity+1)
}

  return (
    <>
    {
    productDetail&&
    <div className="infoPage">
      <div className="imageLeft">
        <img src={process.env.PUBLIC_URL+productDetail.img} alt=""/>
      </div>
      <div className="infoRight">
        <h1>{productDetail.title}</h1>
        <p>Color : {productDetail.colors}</p>
        <p>Size : {productDetail.size}</p>
        <p>Price : {productDetail.currency}{productDetail.price}</p>
        <div className="addToCart">
            <button key={productDetail.id} onClick={addCart}>Add To Cart</button>
       </div>
      </div>
       
    </div>
    }
    </>
  )
}

export default ProductInfo