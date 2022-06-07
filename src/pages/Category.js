import React from 'react'
import '../Styles/Category.css';
import product from '../assets/data/product'
import ProductCard from '../component/ProductCard.js'


function Category() {
    
    return(
        <div className="category">
            <div className="list">
                {product.map((item) => {
                    const {id, title, price, currency, img, size, colors,slug} = item;
                    return(
                        <ProductCard
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            currency={currency}
                            img={img}
                            colors={colors}
                            size={size}
                            slug={slug}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Category