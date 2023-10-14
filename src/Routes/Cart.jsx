import { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export function Cart() {
  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
      <Link to="/Signin" />;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <link rel="shortcut icon" href="./images/favicon.png" />

      <title>WEY_STORE</title>
      {/* Start Header/Navigation */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="">
            WEY<span>.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  <Link to="/home">Home</Link>
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  <Link to="/shop">Shop</Link>
                </a>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="/admin">
                  <img src="./../images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/cart">
                  <img src="./../images/cart.svg" />
                </a>
              </li>
              <ul>
                <li>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleSignOut();
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
      <>
        {/* End Header/Navigation */}
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Cart</h1>
                </div>
              </div>
              <div className="col-lg-7" />
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        <div className="untree_co-section before-footer-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <img
                            src="./../images/Apple-iPhone-15-Pro-Lineup-PNG.png"
                            alt="Image"
                            className="img-fluid"
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">IPHONE 15 PRO MAX</h2>
                        </td>
                        <td>56,900฿</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: 120 }}
                          >
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                              >
                                −
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              defaultValue={1}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>56,900฿</td>
                        <td>
                          <a href="" className="btn btn-black btn-sm">
                            X
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <img
                            src="public/images/Samsung Galaxy S23 Ultra.jpg"
                            alt="Image"
                            className="img-fluid"
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">
                            SAMSUNG GALAXY S23 ULTRA
                          </h2>
                        </td>
                        <td>43,990฿</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: 120 }}
                          >
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                              >
                                −
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              defaultValue={1}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>43,990฿</td>
                        <td>
                          <a href="" className="btn btn-black btn-sm">
                            X
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-black btn-sm btn-block">
                      Update Cart
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-black btn-sm btn-block">
                      Continue Shopping
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" htmlFor="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-black">Apply Coupon</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">100,890฿</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">100,890฿</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          className="btn btn-black btn-lg py-3 btn-block"
                          onclick="window.location='checkout.html'"
                        >
                          Proceed To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Section */}
        <footer className="footer-section">
          <div className="container relative">
            <div className="">
              <img
                src="/images/Apple-iPhone-15-Pro-Lineup-PNG.png"
                alt="Image"
                className="img-fluid"
              />
            </div>

            <div className="row g-5 mb-5">
              <div className="col-lg-4">
                <div className="mb-4 footer-logo-wrap">
                  <a href="#" className="footer-logo">
                    WEY STORE<span>.</span>
                  </a>
                </div>
                <ul className="list-unstyled custom-social">
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-top copyright">
              <div className="row pt-4">
                <div className="col-lg-6">
                  <p className="mb-2 text-center text-lg-start">
                    Copyright © . All Rights Reserved.
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                  <ul className="list-unstyled d-inline-flex ms-auto">
                    <li className="me-4">
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer Section */}
      </>
    </>
  );
}
