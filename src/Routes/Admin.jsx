import { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export function Admin() {
  const storage = getStorage();
  const storageRef = ref(storage);

  const spaceRef = ref(
    storage,
    "gs://myshopwey.appspot.com/android-svgrepo-com.svg"
  );
  const android = ref(storage, "images/android-svgrepo-com.svg");

  const ios = ref(storage, "images/ios-svgrepo-com.svg");
  downloadAndInsertImagea(android);
  downloadAndInsertImagei(ios);

  function downloadAndInsertImagea(imageRef) {
    // Get the download URL for the image file
    getDownloadURL(imageRef)
      .then((url) => {
        // Download the image directly
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Insert the image into an <img> element
        const img = document.getElementById("myimgandriod");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  function downloadAndInsertImagei(imageRef) {
    // Get the download URL for the image file
    getDownloadURL(imageRef)
      .then((url) => {
        // Download the image directly
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Insert the image into an <img> element
        const img = document.getElementById("myimgios");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  const db = getFirestore();
  const ProductsRef = collection(db, "Products");
  useState(async () => {
    const docsSnap = await getDocs(ProductsRef);
    docsSnap.forEach((doc) => {});
    const table = document.getElementById("table");

    function getProducts(db) {
      const empCol = collection(db, "Products");
      const empSnapshot = getDocs(empCol);
      return empSnapshot;
    }

    async function addProduct() {
      const form = document.getElementById("addForm1");

      try {
        const docRef = await addDoc(collection(db, "Products"), {
          name: form.namea.value,
          price: form.pricea.value,
        });

        alert("บันทึกข้อมูลเรียบร้อย");
        document.getElementById("namea").value = "";
        document.getElementById("pricea").value = "";

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      useEffect(() => {
        window.location.reload();
      }, []);
    }
    const form = document.getElementById("addForm1");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      try {
        addProduct();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });

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
  });

  function showUpdateForm(id) {
    // Get the document to update
    const productRef = doc(db, "Products", id);
    console.log(id);

    // Fetch the specific product document
    getDoc(productRef)
      .then(async (productSnapshot) => {
        if (productSnapshot.exists()) {
          const product = productSnapshot.data();

          // Populate input fields with product data
          const nameInput = document.getElementById("nameInput");
          const priceInput = document.getElementById("priceInput");
          nameInput.value = product.name;
          priceInput.value = product.price;

          const btnSubmit = document.createElement("button");
          btnSubmit.type = "submit";
          btnSubmit.textContent = "UPDATE";
          btnSubmit.classList.add("btn", "btn-success", "me-md-2");
          btnSubmit.setAttribute("data-id", product.id);

          console.log(btnSubmit);
          // window.location.reload();
        } else {
          console.log("Product not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
    // Update product function
    function updateProduct(e) {
      e.preventDefault();
      const name = e.target.querySelector('input[name="nameu"]').value;
      const price = e.target.querySelector('input[name="priceu"]').value;
      // Update the document in Firestore
      // Use the updated field names "nameu" and "priceu"
      const productRef = doc(db, "Products", id);
      updateDoc(productRef, { name, price })
        .then(() => {
          alert("บันทึกข้อมูลเรียบร้อย");
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    }

    // Add an event listener to the form
    const updateForm = document.getElementById("updateForm");
    updateForm.addEventListener("submit", updateProduct);

    useEffect(() => {
      window.location.reload();
    }, []);
  }

  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
      <Link to="/Signin" />;
    } catch (error) {
      console.log(error);
    }
  }
  const mystyle = {
    width: "100px",
    height: "100px",
  };
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
              <li className="nav-item dropdown">
                <h3 style={{ color: "white",
              textAlign:"center" }}>Admin</h3>
              </li>

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
      <title>WEY STORE</title>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <link rel="shortcut icon" href="./../images/favicon.png" />
      <main className="container-fluid">
        <div className="container my-3">
          <a className="nav-link">
            <h2 className="text-center">WEY STORE</h2>
          </a>

          <div id="Modalupdate" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">UPDATE DATA</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <form id="updateForm" method="post">
                  {/* Input fields for product data */}
                  <div className="modal-body">
                    <label className="m-2" htmlFor="name">
                      name
                    </label>
                    <input
                      className="m-2"
                      type="text"
                      name="nameu"
                      id="nameInput"
                    />
                    <br />
                    <label className="m-2" htmlFor="price">
                      price
                    </label>
                    <input
                      className="m-2"
                      type="number"
                      name="priceu"
                      id="priceInput"
                    />
                  </div>
                  {/* Submit button */}
                  <br />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="Modaladd" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">ADD DATA</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <form id="addForm1" method="post">
                  {/* Input fields for product data */}
                  <div className="modal-body">
                    <label className="m-2" htmlFor="name">
                      name{" "}
                    </label>
                    <input
                      className="m-2"
                      type="text"
                      name="namea"
                      id="nameInputa"
                    />
                    <br />
                    <label className="m-2" htmlFor="price">
                      price
                    </label>
                    <input
                      className="m-2"
                      type="number"
                      name="pricea"
                      id="priceInputa"
                    />
                  </div>
                  {/* Submit button */}
                  <br />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      id="btnadda"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="submit"
              className="btn btn-success me-md-2"
              id="btnadd"
              data-bs-toggle="modal"
              data-bs-target="#Modaladd"
            >
              ADD
            </button>
          </div>
          <hr />
          <table className="table table-hover">
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
        </div>
      </main>
    </>
  );
}
