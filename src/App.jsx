import { useEffect, useState } from "react";
import "./App.css";
import { Signin } from "./Routes/Signin";
import { Signup } from "./Routes/Signup";
import { Home } from "./Routes/Home";
import { Shop } from "./Routes/Shop";
import { Admin } from "./Routes/Admin";
import { Cart } from "./Routes/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected";
import { ProtectedAdmin } from "./Routes/Protectedadmin";
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
      path: "/admin",
      element: (
        <ProtectedAdmin>
          <Admin />
        </ProtectedAdmin>
      ),
    },
    {
      path: "/cart",
      element: (
        <Protected>
          <Cart />
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
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  );
}

export default App;
