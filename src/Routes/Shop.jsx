import { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";
export function Shop() {
  const db = getFirestore();
  const ProductsRef = collection(db, "Products");
  useState(async () => {
    const docsSnap = await getDocs(ProductsRef);
    docsSnap.forEach((doc) => {});
    const table = await document.getElementById("table");

    async function getProducts(db) {
      const empCol = collection(db, "Products");
      const empSnapshot = await getDocs(empCol);
      return empSnapshot;
    }

    function showData(Products) {
      //   console.log(Products);

      const row = table.insertRow(-1);
      const nameCol = row.insertCell(0);
      const priceCol = row.insertCell(1);
      const deleteCol = row.insertCell(2);
      row.classList.add("table-light");

      // Add an event listener to the form

      // Populate input fields with product data
      const nameInput = document.getElementById("nameInput");
      const priceInput = document.getElementById("priceInput");

      nameCol.textContent = Products.data().name;
      priceCol.textContent = Products.data().price;
      const img = document.createElement("img");
      img.setAttribute("ID", "myimgip15");
      nameCol.appendChild(img);
      img.classList.add("ratio", "ratio-16x9");
      // downloadAndInsertImageip15(ip15);

      // สร้างปุ่มลบ
      const btnDelete = document.createElement("button");
      btnDelete.textContent = "DELETE";
      btnDelete.classList.add("btn", "btn-danger", "m-1");
      btnDelete.style.width = "80px";
      btnDelete.setAttribute("data-id", Products.id);
      deleteCol.appendChild(btnDelete);
      // สร้างปุ่มอัปเดต
      const btnUpdate = document.createElement("button");
      btnUpdate.textContent = "EDIT";
      btnUpdate.style.width = "80px";
      btnUpdate.classList.add("btn", "btn-primary", "m-1");
      btnUpdate.setAttribute("data-id", Products.id);
      btnUpdate.setAttribute("data-bs-target", "#Modalupdate");
      btnUpdate.setAttribute("data-bs-toggle", "modal");
      deleteCol.appendChild(btnUpdate);

      btnDelete.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");

        // ถามเตือนก่อนลบเอกสาร
        const confirmed = confirm(
          "Are you sure you want to delete this product?"
        );
        if (confirmed) {
          deleteDoc(doc(db, "Products", id));
        }
      });

      // เพิ่มเหตุการณ์ click
      btnUpdate.addEventListener("click", (e) => {
        // รับ ID ของเอกสาร
        let id = e.target.getAttribute("data-id");
        console.log(id);
        // แสดงแบบฟอร์มอัปเดต
        showUpdateForm(id);
      });
    }

    const data = await getProducts(db);
    data.forEach((Products) => {
      showData(Products);
    });

    const tables = document.querySelector(".table");
    const tableRows = tables.querySelectorAll("tbody tr");

    // Create an empty array to store the product names and prices.
    const productData = [];

    // Loop through the table rows and extract the name and price of each product.
    tableRows.forEach((row) => {
      const name = row.querySelector("td:first-child").textContent;
      const price = row.querySelector("td:nth-child(2)").textContent;

      // Add the product name and price to the array.
      productData.push({ name, price });
    });
    const productDataWithoutEmptyItems = productData.filter((item) => {
      return item.name !== "";
    });
    const uniqueProducts = new Set();

    // Iterate over the products array and add each product to the set.
    productDataWithoutEmptyItems.forEach((product) => {
      uniqueProducts.add(product);
    });

    // Convert the set back to an array.
    const productsWithoutDuplicates = Array.from(uniqueProducts);

    // Log the products array without duplicates.
    console.log(productsWithoutDuplicates);
    // Print the product data to the console.
    console.log(productDataWithoutEmptyItems);

    // Display the product names and prices in the HTML.
    const productList = document.querySelectorAll(".product-item");

    console.log(productList);

    for (let i = 0; i < productsWithoutDuplicates.length; i++) {
      const productName = productList[i].querySelector("h3");
      const productPrice = productList[i].querySelector("strong");
      productName.textContent = productsWithoutDuplicates[i].name;
      productPrice.textContent = productsWithoutDuplicates[i].price;
      // Display the product name and price in the HTML.
      // You can use any HTML element to display the product name and price.
      // For example, you can use a `div` element, a `paragraph` element, or a `span` element.

      productList[i].innerHTML = `
  <img src="./../images/${productName.textContent}.jpg" class="img-fluid product-thumbnail" id="pd${i}">
    <h3>${productName.textContent}</h3>
    <p>${productPrice.textContent}</p>
   
   <span class="icon-cross">
                <img src="./../images/cross.svg" class="img-fluid">
              </span>
  `;
    }
  });

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
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="././../images/favicon.png" />
      <meta name="description" content="" />
      <meta name="keywords" content="bootstrap, bootstrap4" />
      {/* Bootstrap CSS */}
      <link href="./../css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <link href="./../css/tiny-slider.css" rel="stylesheet" />
      <link href="./../css/style.css" rel="stylesheet" />
      <title>Shop</title>
      {/* Start Header/Navigation */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
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
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="active">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="/crud">
                  <img src="./../images/user.svg" />
                </a>
              </li>
            
              <li>
                <a className="nav-link" href="/cart">
                  <img src="./../images/cart.svg" />
                </a>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
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
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7" />
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/download.webp"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">OPPO FIND 2</h3>

                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/Find-N3-Flip.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">SAMSUNG FILP 5</h3>
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/th-galaxy-s23-s918-sm-s918blibthl-534856828 (1).png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">SAMSUNG GALAXY S23 ULTRA</h3>
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/iphone-card-40-iphone15prohero-202309_FMT_WHH.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title" />
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
            {/* Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/zflip5.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title" />
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/ss22.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title" />
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/download (1).jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title" />
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="public/images/download.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title" />
                <strong className="product-price" />
                <span className="icon-cross">
                  <img src="./../images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img
              src="./../images/Apple-iPhone-15-Pro-Lineup-PNG.png"
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
            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
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
      <table className="table table-hover" style={{ display: "none" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col" className=" justify-content-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="table" />
      </table>
    </>
  );
}
