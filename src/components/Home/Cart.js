import React, { memo } from 'react';

const CartItem = memo(function C({ id, name, price, count, onItemRemove }) {
  const handleItemBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onItemRemove({ id, name, price });
  };
  return (
    <li className="cart-item">
      <a
        href="#remove"
        className="navy-link remove-item"
        onClick={handleItemBtnClicked}
      >
        ×
      </a>
      <a href="./product-detail.html">
        <img width="250" height="250" src="" alt={name} className="p-3" />
        {name}
      </a>
      <span className="quantity">
        {' '}
        {count} × <span className="price">{price} WON</span>{' '}
      </span>
    </li>
  );
});

const Cart = ({ items, onItemRemove, onCheckout, onClose }) => {
  const total = items.reduce((acc, o) => acc + o.count * o.product.price, 0);

  const handleCheckoutBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCheckout({ items, total: total });
  };

  const handleCloseBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };
  return (
    <>
      <div className="shopping-cart">
        <div className="cart-header text-center p-3">
          <a
            href="#"
            className="drawer-close navy-link float-left"
            onClick={handleCloseBtnClicked}
          >
            <i className="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
          </a>
          <span className="navy">SHOPPING CART</span>
          <div className="navy-line"></div>
        </div>
        <div className="cart-content">
          <ul className="list-unstyled">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                count={item.count}
                onItemRemove={onItemRemove}
              />
            ))}
          </ul>
          <div className="total-section px-3 py-4 gray-bg">
            <span>TOTAL:</span>
            <span className="float-right m-0 price">{total}</span>
          </div>
        </div>
        <div className="cart-footer p-3">
          <a
            className="btn btn-lg btn-primary checkout-btn"
            role="button"
            onClick={handleCheckoutBtnClicked}
          >
            Checkout
          </a>
        </div>
      </div>
      <style jsx>{`
        .shopping-cart {
          height: 100%;
        }
        li.cart-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          position: relative;
          display: block;
          padding: 20px 50px 0 125px;
          min-height: 100px;
          width: 100%;
          overflow: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          color: #4a4a4a;
        }
        li.cart-item a {
          display: block;
          font-weight: bold;
          line-height: 1.5;
          color: #4a4a4a;
          text-decoration: none;
        }
        li.cart-item a.remove-item {
          position: absolute;
          top: 20px;
          right: 30px;
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }
        li.cart-item img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          max-width: 100px;
          width: 100px;
          height: 100px;
        }
        li.cart-item img {
          max-width: 150px;
          width: 100px;
          height: 100px;
        }
        li.cart-item .quantity {
          padding-bottom: 15px;
          display: inline-block;
          color: rgba(0, 0, 0, 0.35);
        }
        .shopping-cart .total-section {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .shopping-cart .checkout-btn {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Cart;
