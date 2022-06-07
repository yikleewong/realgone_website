import React from 'react'
import '../Styles/Home.css';
import img1 from "../assets/images/slider/1.jpg"
import img2 from "../assets/images/slider/2.jpg"
import img3 from "../assets/images/slider/3.jpg"
import Carousel from 'react-bootstrap/Carousel'
import ProductCard from '../component/ProductCard'
import product from '../assets/data/product'

function Home() {
    return (
      <div className='home'>
        <div className='Carouselslider'>
          <Carousel pauseonhover="true">
            <Carousel.Item interval={2000} style={{'height':"85vh", }}>
              <img 
                style={{'height':"85vh"}}
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} style={{'height':"85vh"}}>
              <img 
                style={{'height':"85vh"}}
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} style={{'height':"85vh"}}>
              <img
                style={{'height':"85vh"}}
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="list">
                {product.map((item) => {
                    const {id, title, price, currency, img, colors, size, slug} = item;
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

export default Home
