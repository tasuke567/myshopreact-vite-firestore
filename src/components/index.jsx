import React from "react";
import { Link } from "react-router-dom"; 
const Index = () => {
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
                <a className="nav-link" href="">
                  <Link to="/admin"></Link>
                  <img src="" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  <Link to="/cart"></Link>
                  <img src="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
      {/* End Popular Product */}
      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          
          <div className="row">
            <div className="col-lg-8">
              
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
  );
};

export default Index;

