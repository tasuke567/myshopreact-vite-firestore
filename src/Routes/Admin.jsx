import { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export function Admin() {
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
    </>
  );
}


