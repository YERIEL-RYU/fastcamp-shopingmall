/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Drawer from '../../Drawer';
import Cart from '../../Home/Cart';
import Footer from '../../Home/Footer';
import Navitation from '../../Nav/Nav';

const Index = (props) => {
  const {component : Component, ...rest} = props;
  const [isShopingCartOpen, setIsShopingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onCartClick = () => {
    setIsShopingCartOpen(!isShopingCartOpen);
  };

  const handleCartClosed = () => {
    setIsShopingCartOpen(false);
  };

  const handleCartItemRemoved = ({ id }) => {
    const foundItem = cartItems.find((v) => v.product.id === id);
    if (foundItem === null) {
      throw new Error(`Can not find the itme (${id})`);
    }
    if (foundItem !== undefined && foundItem.count > 1) {
      foundItem.count -= 1;
    } else {
      const index = cartItems.indexOf(foundItem);

      cartItems.splice(index, 1);
    }
    setCartItems([...cartItems]);
  };

  const handleProductCartClicked = (product) => {
    const found = cartItems.find((v) => v.product.id === product.id);
    if (found) {
      found.count += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { product, count: 1 }]);
    }
  };

  const handleCheckout = ({ items, total }) => {
    console.log(`Checkout ${JSON.stringify(items)} total : ${total}`);
  };
  return (
    <Route
    {...rest}
    render={(matchProps) => (
      <>
        <Drawer
          isOpen={isShopingCartOpen}
          component={Cart}
          items={cartItems}
          onItemRemove={handleCartItemRemoved}
          onCheckout={handleCheckout}
          onClose={handleCartClosed}
        />
        <Navitation onCartClick={onCartClick} cartItemCounts={cartItems.length} />
        <Component {...matchProps} onAddCartItem={handleProductCartClicked}/>
        <Footer />
      </>
    )}></Route>
  );
};

export default Index;
