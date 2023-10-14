import { signOut, getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Home() {
  const auth = getAuth();
  // console.log(auth.currentUser.uid);
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
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <h2 className="welcome__video-headline">
                  <span className=".text-light" style={{ color: "whitesmoke" }}>
                    IPhone 15 Pro MAX
                  </span>
                  <figure
                    className=".text-light"
                    style={{ color: "whitesmoke" }}
                  >
                    ไทเทเนียม สุดแกร่ง สุดเบา สุดโปร
                  </figure>
                </h2>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img
                    src="images/hero_endframe__ov6ewwmbhiqq_large.jpg"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        {/* Start Product Section */}
        <div className="product-section">
          <div className="container">
            <div className="row">
              {/* Start Column 1 */}
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">
                  รังสรรค์ ด้วยคุณภาพ บริการด้วยใจ
                </h2>
                <p className="mb-4"></p>
                <p>
                  <a href="./src/shop.html" className="btn">
                    เลือกดูสินค้าทั้งหมด
                  </a>
                </p>
              </div>
              {/* End Column 1 */}
              {/* Start Column 2 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="./src/cart.html">
                  <img
                    src="images/Apple-iPhone-15-Pro-Lineup-PNG.png"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">IPHONE 15 PRO MAX</h3>
                  <strong className="product-price">$1749.00</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 2 */}
              {/* Start Column 3 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="./src/cart.html">
                  <img
                    src="images/th-galaxy-s23-s918-sm-s918blibthl-534856828 (1).png"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Samsung Galaxy S23 Ultra</h3>
                  <strong className="product-price">$1079.00</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 3 */}
              {/* Start Column 4 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="./src/cart.html">
                  <img
                    src="images/download.webp"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">OPPO Find N2 Flip</h3>
                  <strong className="product-price">$808.00</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 4 */}
            </div>
          </div>
        </div>
        {/* End Product Section */}
        {/* Start Popular Product */}
        <div className="popular-product">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="./images/iphone-card-40-iphone15prohero-202309_FMT_WHH.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>IPHONE 15 PRO MAX</h3>
                    <p>
                      ไทเทเนียม ชิป A17 Pro ปุ่มแอ็คชั่น กล้องหลักความละเอียด
                      48MP ซื้อเลย iPhone 15 Pro Max มาพร้อมการซูมแบบออปติคัล 5
                      เท่า เรียกว่าสุดขอบเลยล่ะ...
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="images/th-galaxy-s23-s918-sm-s918blibthl-534856828 (1).png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>Samsung Galaxy S23 Ultra</h3>
                    <p>
                      กล้องคมชัด ซูมคมชัดระดับ 100x มาพร้อมหน้าจอ 6.8" 120Hz
                      และกล้องถ่ายภาพกลางคืนปรับปรุงใหม่
                      พร้อมเก็บภาพได้ทุกโมเม้น.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="images/download.webp"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>OPPO FIND N2 FLIP</h3>
                    <p>
                      มาพร้อมหน้าจอด้านหน้าขนาด 3.26 นิ้ว,
                      การพับระดับชั้นนำของอุตสาหกรรม, ระบบชาร์จไว 44W SUPERVOOC,
                      กล้อง Hasselblad สำหรับสมาร์ตโฟน, FlexForm Camera, ...
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Popular Product */}
      </>

      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-8"></div>
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
}
