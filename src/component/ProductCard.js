import React ,{useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/ProductCard.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../assets/data/cartContext';


function ProductCard({id, title, price, currency, img, colors, size, slug, add="true", quan="true", button="true"}) {

    const {cartItem, setCartItem} = useContext(CartContext)

    function addCart() {
        if(productIndexInCart===-1){
            setCartItem([
                {
                    id:id,
                    title:title,
                    price:price,
                    currency:currency,
                    img:img,
                    colors:colors,
                    size:size,
                    slug:slug,
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

    function RemoveCart(){
        if(cartItem[productIndexInCart].quantity===1){
            const newCartArray = [...cartItem]
            newCartArray.splice(productIndexInCart,1)
            setCartItem(newCartArray)
        }
        else{
            const newCartArray = [...cartItem]
            newCartArray[productIndexInCart].quantity--
            setCartItem(newCartArray)
        }
        setquantity(quantity-1)
    }

    const productIndexInCart = cartItem.findIndex((element)=>{
        return element.id === id
    })

    const [quantity, setquantity] = useState(
        (productIndexInCart===-1) ? 0 : cartItem[productIndexInCart].quantity
    );

  return (
    <div className="card">
        {button&&
        <>
        <div className="image">
            <Link to={"/product/"+slug}>
            <img src={process.env.PUBLIC_URL+img} alt=""/>
            </Link>
        </div>
        <Link to={"/product/"+slug}>
            <h1>{title}</h1>
        </Link>
        <p>Price : <span>{currency}</span>{price}</p>
        <p>Color : {colors}  ; Size : {size}</p> 
        </>}
        { add &&
        <div className="addToCart">
            <button key={id} onClick={addCart}>Add To Cart</button>
        </div> 
        }
        {   !quan &&
            <>
                Quantity : <AddIcon onClick={addCart}/> {quantity} <RemoveIcon onClick={RemoveCart}/>
                
            </>
        }
    </div>
  )
}

export default ProductCard