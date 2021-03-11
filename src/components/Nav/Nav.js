import React from 'react';
import NavItem from './NavItem'
import Logo from './Logo'
import Topbar from './TopBar'

const Nav = ({onCartClick, cartItemCounts}) => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch">
        <Topbar onCartClick={onCartClick} cartItemCounts={cartItemCounts}/>
        <div className="container align-items-start menu">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <NavItem to='#' text="Home" active />
              <NavItem to='#' text="Products"/>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
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
        .cart .item-number {
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default Nav;
