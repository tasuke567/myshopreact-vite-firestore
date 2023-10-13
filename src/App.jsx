import { useEffect, useState } from "react";
import "./App.css";
import { Signin } from "./Routes/Signin";
import { Signup } from "./Routes/Signup";
import { Home } from "./Routes/Home";
import { Shop } from "./Routes/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

import { db } from "./fbconfig";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/shop",
      element: (
        <Protected>
          <Shop />
          
        </Protected>
      ),
    },
    {
      path: "/signin",
      element: <Signin></Signin>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
  ]);

  return (
<<<<<<< HEAD
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
=======
    <>
      
          
      {/* <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thx" element={<Thx />} />
          <Route path="/" element={<Index /> }
          />
        </Routes>
      </Router>*/}
            <div>
        <Auth />
        <div>
          <input
            placeholder="Name..."
            onChange={(e) => setProductsName(e.target.value)}
          />

          <input
            placeholder="Price..."
            onChange={(e) => setProductsPrice(Number(e.target.value))}
          />

          <label>
            <input
              type="checkbox"
              checked={newStock}
              onChange={(e) => setnewStock(e.target.checked)}
            />
            On Stock
          </label>

          <button onClick={onSubmitProducts}>Submit Products</button>
        </div>
        <div>
          {ProductsList.map((Products) => (
            <div>
              <h1>{Products.name}</h1>
              <p> Price : {Products.price}</p>

              <button onClick={() => deleteProducts(Products.id)}>
                Delete Products
              </button>
            </div>
          ))}
        </div>
      </div> 
    </>
>>>>>>> a80ad222729d6df7e73f669bbf33b9221fe61d1b
  );
}

export default App;
