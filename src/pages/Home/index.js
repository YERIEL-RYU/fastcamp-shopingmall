import React, { useState } from 'react';
import mainImage from '../../assets/images/main.jpg';
import Product from '../../components/Product';
import Banner from './Banner';
import Collection from './Category';
import WatchImg from '../../assets/images/products/item5.jpeg';
import ClothesImg from '../../assets/images/products/item6.jpeg';
import ShoesImg from '../../assets/images/products/item7.jpeg';
import GlovesImg from '../../assets/images/products/item10.jpeg';
import Gaurantees from './Gaurantees';

const state = {
  newArrivals: [
    {
      id: '1',
      name: 'React Note',
      price: 2000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 4,
      total_reviews: 200,
    },
    {
      id: '2',
      name: 'React Product 2',
      price: 13000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 4,
      total_reviews: 5,
    },
    {
      id: '3',
      name: 'React Product 3',
      price: 4000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 2,
      total_reviews: 10,
    },
    {
      id: '4',
      name: 'React Product 4',
      price: 5000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 1,
      total_reviews: 10,
    },
  ],
  categories: [
    {
      id: '1',
      name: 'Watch',
      to: '#',
      img: WatchImg,
    },
    {
      id: '2',
      name: 'Clothes',
      to: '#',
      img: ClothesImg,
    },
    {
      id: '3',
      name: 'Shoes',
      to: '#',
      img: ShoesImg,
    },
    {
      id: '4',
      name: 'Gloves',
      to: '#',
      img: GlovesImg,
    },
  ],
};

const Home = ({onAddCartItem}) => {
  const [isShopingCartOpen, setIsShopingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleProductCartClicked = (product) => {
    onAddCartItem(product);
  };


  return (
    <>
      <main>
        <Banner />
        <section className="new-arrivals container">
          <div className="row copy">
            <div className="col-12 text-center mt-5">
              <div className="navy-line"></div>
              <h1>NEW ARRIVALS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row items">
            {state.newArrivals.map((product) => (
              <div
                key={product.id}
                className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
              >
                <Product
                  product={product}
                  onCartBtnClick={handleProductCartClicked}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="featured-collection container my-5">
          <div className="row copy">
            <div className="col-12 text-center">
              <div className="navy-line"></div>
              <h1>FEATURED COLLECTION</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row">
            {state.categories.map((c) => (
              <div key={c.id} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <Collection name={c.name} to={c.to} alt={c.name} img={c.img} />
              </div>
            ))}
          </div>
        </section>

        <section className="explore flex-fill bg-light my-5 py-4 text-center">
          <h3 className="mb-3">
            Over <strong>50.000</strong> digital products!
          </h3>
          <a
            className="btn btn-rounded btn-noborder btn-lg btn-primary"
            href="#products"
          >
            Explore Store <i className="fas fa-arrow-right"></i>
          </a>
        </section>
        <Gaurantees />
      </main>
      <style jsx>
        {`
          /* navigation */
          .top-bar {
            min-height: 36px;
          }
          .top-bar ul li a {
            padding: 0 19px;
            line-height: 35px;
            font-size: 14px;
            color: #ffffff;
          }
          .top-bar .cart a {
            font-size: 12px;
            display: inline-block;
            background-color: #1dc5a3;
            line-height: 35px;
            min-height: 36px;
            font-size: 14px;
            color: #ffffff;
          }
          .top-bar .account-login small {
            color: rgba(255, 255, 255, 0.5);
            padding: 0 10px;
          }

          .menu .navbar-nav .nav-item > .nav-link {
            color: #fff;
            font-family: 'Open Sans', helvetica, arial, sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .menu .navbar-nav .nav-link {
            padding-top: 25px;
            border-top: 6px solid transparent;
          }
          .menu .navbar-nav .nav-item.active > .nav-link,
          .menu .navbar-nav .nav-item.active > .nav-link:hover {
            background: transparent;
            color: #fff;
            border-top: 6px solid #1ab394;
          }
          .menu .navbar-nav .nav-item > .nav-link:hover {
            color: #1ab394;
          }
          .menu .navbar-nav > .active > a:focus {
            background: transparent;
            color: #fff;
          }
          .menu .navbar-brand:hover,
          .menu .navbar-brand:focus {
            background: #17a185;
            color: #fff;
          }
          .menu .navbar-brand {
            color: #fff;
            height: auto;
            display: block;
            font-size: 14px;
            background: #1ab394;
            padding: 15px 20px 15px 20px;
            border-radius: 0 0px 5px 5px;
            font-weight: 700;
            transition: all 0.3s ease-in-out 0s;
          }

          /* banner */
          .well {
            height: 400px;
            background-repeat: no-repeat;
            background-image: url(${mainImage});
            background-size: cover;
            background-position: center center;
          }
          .well .caption {
            position: absolute;
            top: 150px;
            left: 40px;
            bottom: auto;
            right: auto;
            text-align: left;
            color: white;
          }
          .well .caption h1 {
            font-weight: 700;
            font-size: 38px;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
};

export default Home;
