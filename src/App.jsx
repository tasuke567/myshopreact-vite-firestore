import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Thx from "./components/Thx";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Index from "./components/index";

function App() {
  const [ProductsList, setProducts] = useState([]);

  const [newProducts, setProductsName] = useState("");
  const [newPrice, setProductsPrice] = useState(0);
  const [newStock, setnewStock] = useState(false);
  const ProductsRef = collection(db, "Products");

  const getProducts = async () => {
    //REAd the data
    //SET THE PRODUCTS LISTS
    try {
      const data = await getDocs(ProductsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: data.id,
      }));
      setProducts(filteredData);
    } catch (err) {
      console.log("Error fetching products", err);
    }
  };

  const deleteProducts = async (id) => {
    const ProductDoc = doc(db, "Products", id);
    await deleteDoc(ProductDoc);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onSubmitProducts = async () => {
    try {
      await addDoc(ProductsRef, {
        name: newProducts,
        price: newPrice,
        stock: newStock,
      });
      getProducts();
    } catch (err) {
      console.error("Failed to create new product", error);
    }
  };
  return (
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
  );
}

export default App;
