import Register from "./components/Register";
import Login from "./components/Login";
import Product from "./components/Product";
import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./components/Cart";
import ProductShorts from "./components/ProductShorts";
import ProductHoodies from "./components/ProductHoodies";
import ProductJackets from "./components/ProductJackets";
import DetailsCardShorts from "./components/DetailsCard/DetailsCardShorts";
import DetailsCardPants from "./components/DetailsCard/DetailsCardPants";
import DetailsCardHoodies from "./components/DetailsCard/DetailsCardHoodies";
import DetailsCardJackets from "./components/DetailsCard/DetailsCardJackets";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function App() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  const [cart, setCart] = useState({
    name:"",
    price: "",
  quantity:"",
  src:"",
  tagname: "",
  title: ""
  });
  // const useLogin = JSON.parse(localStorage.getItem("userLogin"));
  // const navigate = useNavigate();
  // console.log(useLogin);

  // const handleLogout = () => {
  //   localStorage.removeItem("userLogin");
  //   navigate("/login");
  // };
  
  return (
    <div className="App">
      {/* START HEADER */}
      <div className="sticky">
        <header>
          <div className="header-img">
            <Link to="/">
              <img src="http://vietgangz.com/wp-content/uploads/2020/09/tai-xuong.png" />
            </Link>
          </div>
        </header>
        {/* END HEADER */}
        {/* START NAV */}
        <nav>
          <div className="header-button">
            <Button variant="primary" onClick={handleShow}>
              <i class="fa-solid fa-bars" style={{ color: " #ffffff" }}></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <img src="http://vietgangz.com/wp-content/uploads/2020/09/tai-xuong.png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="nav-1-2-mobile">
                  <div className="nav-1-mobile">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          HOME
                        </Link>
                      </li>
                      <hr></hr>
                      <li>
                        <a>
                          <NavDropdown
                            id="nav-dropdown-white-example"
                            title="SHOP"
                            menuVariant="white"
                          >
                            <ul className="list-mobile">
                              <li>
                                <Dropdown.ItemText>TOPS</Dropdown.ItemText>
                                <NavDropdown.Divider />
                                <div className="list-font">
                                  <Link
                                    to="/producthoodies"
                                    className="deco-item"
                                  >
                                    <Dropdown.ItemText>
                                      Hoodies
                                    </Dropdown.ItemText>
                                  </Link>
                                  <NavDropdown.Divider />
                                  <Link
                                    to="/productjackets"
                                    className="deco-item"
                                  >
                                    <Dropdown.ItemText>
                                      Jackets
                                    </Dropdown.ItemText>
                                  </Link>
                                  <NavDropdown.Divider />
                                  <Dropdown.ItemText>Shirt</Dropdown.ItemText>
                                  <NavDropdown.Divider />
                                  <Dropdown.ItemText>Sweater</Dropdown.ItemText>
                                  <NavDropdown.Divider />
                                  <Dropdown.ItemText>
                                    T-Shirts
                                  </Dropdown.ItemText>
                                  <NavDropdown.Divider />
                                  <Dropdown.ItemText>
                                    Tank Top
                                  </Dropdown.ItemText>
                                </div>
                              </li>

                              <li>
                                <Dropdown.ItemText>BOTTOM</Dropdown.ItemText>
                                <NavDropdown.Divider />
                                <div className="list-font">
                                  <Link
                                    to="/productshorts"
                                    className="deco-item"
                                  >
                                    <Dropdown.ItemText>
                                      Shorts
                                    </Dropdown.ItemText>
                                  </Link>
                                  <NavDropdown.Divider />
                                  <Link to="/product" className="deco-item">
                                    <Dropdown.ItemText>Pants</Dropdown.ItemText>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <Dropdown.ItemText>
                                  ACCESSORIES
                                </Dropdown.ItemText>
                                <NavDropdown.Divider />
                                <div className="list-font">
                                  <Dropdown.ItemText>
                                    Mask & Scarf
                                  </Dropdown.ItemText>
                                  <NavDropdown.Divider />
                                  <Dropdown.ItemText>
                                    Phone Case
                                  </Dropdown.ItemText>
                                </div>
                              </li>

                              <li>
                                <Dropdown.ItemText>FOOTWEAR</Dropdown.ItemText>
                                <NavDropdown.Divider />
                                <div className="list-font">
                                  <Dropdown.ItemText>
                                    Slippers
                                  </Dropdown.ItemText>
                                </div>
                              </li>

                              <li>
                                <Dropdown.ItemText>HEADWEAR</Dropdown.ItemText>
                                <NavDropdown.Divider />
                                <div className="list-font">
                                  <Dropdown.ItemText>
                                    Cap & Snapback
                                  </Dropdown.ItemText>
                                </div>
                              </li>
                            </ul>
                          </NavDropdown>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>BEACH CLUB</a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>GLAMPING CLUB</a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>HORSE CLUB</a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>MINI MART</a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>MOTOR CLUB</a>
                      </li>
                      <hr></hr>
                      <li>
                        <a>MEMBER CARD</a>
                      </li>
                    </ul>
                  </div>

                  <div className="nav-2-mobile">
                    <ul>
                      <hr></hr>
                      <li>
                        <Link
                          to="/login"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <span>ĐĂNG NHẬP</span>
                        </Link>
                      </li>
                      <hr></hr>
                      <li>
                        <Link
                          to="/register"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <span>ĐĂNG KÝ</span>
                        </Link>
                      </li>
                      <hr></hr>
                      <li>
                        <input />{" "}
                        <button>
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </li>

                      <li>
                        <Link
                          to="/cart"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          
                          <i class="fa-solid fa-cart-shopping fa-flip-horizontal"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="nav-1">
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#cccccc" }}
                >
                  <p>HOME</p>
                </Link>
              </li>
              <li>
                <a>
                  <NavDropdown
                    id="nav-dropdown-white-example"
                    title="SHOP"
                    menuVariant="white"
                  >
                    <ul className="list">
                      <li>
                        <Dropdown.ItemText>TOPS</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className="list-font">
                          <Link to="/producthoodies" className="deco-item">
                            <Dropdown.ItemText className="font-list">Hoodies</Dropdown.ItemText>
                          </Link>
                          <NavDropdown.Divider />
                          <Link to="/productjackets" className="deco-item">
                            <Dropdown.ItemText className="font-list">Jackets</Dropdown.ItemText>
                          </Link>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Shirt</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Sweater</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>T-Shirts</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Tank Top</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>BOTTOM</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className="list-font">
                          <Link to="/productshorts" className="deco-item">
                            <Dropdown.ItemText className="font-list">Shorts</Dropdown.ItemText>
                          </Link>
                          <NavDropdown.Divider />
                          <Link to="/product" className="deco-item">
                            <Dropdown.ItemText className="font-list">Pants</Dropdown.ItemText>
                          </Link>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>ACCESSORIES</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className="list-font">
                          <Dropdown.ItemText>Mask & Scarf</Dropdown.ItemText>
                          <NavDropdown.Divider />
                          <Dropdown.ItemText>Phone Case</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>FOOTWEAR</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className="list-font">
                          <Dropdown.ItemText>Slippers</Dropdown.ItemText>
                        </div>
                      </li>

                      <li>
                        <Dropdown.ItemText>HEADWEAR</Dropdown.ItemText>
                        <NavDropdown.Divider />
                        <div className="list-font">
                          <Dropdown.ItemText>Cap & Snapback</Dropdown.ItemText>
                        </div>
                      </li>
                    </ul>
                  </NavDropdown>
                </a>
              </li>
              <li>
                <a>BEACH CLUB</a>
              </li>
              <li>
                <a>GLAMPING CLUB</a>
              </li>
              <li>
                <a>HORSE CLUB</a>
              </li>
              <li>
                <a>MINI MART</a>
              </li>
              <li>
                <a>MOTOR CLUB</a>
              </li>
              <li>
                <a>MEMBER CARD</a>
              </li>
            </ul>
          </div>
          <div className="nav-2">
            <ul>
              {userLogin == null ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#cccccc" }}
                    >
                      <span>ĐĂNG NHẬP</span>
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "#cccccc" }}
                    >
                      <span>ĐĂNG KÝ</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <span><i class="fa-solid fa-user" style={{color: "#fafafa"}}></i> {userLogin.name}</span>
                  <button onClick={handleLogOut}>ĐĂNG XUẤT</button>
                </>
              )}

             

              <li>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "#ccc" }}
                >
                  {" "}
                  <i class="fa-solid fa-cart-shopping fa-flip-horizontal"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* END NAV */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path="/productshorts" element={<ProductShorts cart={cart} setCart={setCart}/>}></Route>
        <Route path="/producthoodies" element={<ProductHoodies cart={cart} setCart={setCart}/>}></Route>
        <Route path="/productjackets" element={<ProductJackets cart={cart} setCart={setCart}/>}></Route>
        <Route
          path="/detailscardshorts/:id"
          element={<DetailsCardShorts cart={cart} setCart={setCart}/>}
        ></Route>
        <Route
          path="/detailscardpants/:id"
          element={<DetailsCardPants cart={cart} setCart={setCart}/>}
        ></Route>
        <Route
          path="/detailscardhoodies/:id" 
          element={<DetailsCardHoodies cart={cart} setCart={setCart} />}
        ></Route>
        <Route
          path="/detailscardjackets/:id"
          element={<DetailsCardJackets cart={cart} setCart={setCart}/>}
        ></Route>
      </Routes>
      {/* START FOOTER */}
      <footer>
        <div className="footer-1">
          <strong>SOCIAL NETWORK</strong>
          <div className="tittle-color"></div>
          <div className="img-mickey">
            <img src="https://vietgangz.com/wp-content/uploads/2020/10/hihi.png" />
          </div>
          <div className="footer-icon">
            <div>
              <a>
                <img
                  src="https://vietgangz.com/wp-content/uploads/2020/09/Instagram-icon-WHITE-800x800-2.png"
                  alt="gg"
                />
              </a>
            </div>
            <div>
              <a>
                <img src="https://vietgangz.com/wp-content/uploads/2020/09/tai-xuong-1-1.png" />
              </a>
            </div>
            <div>
              <a>
                <img src="https://vietgangz.com/wp-content/uploads/2020/09/tai-xuong-2-1.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-2">
          <strong>LIÊN KẾT</strong>
          <div className="tittle-color"></div>
          <div>
            <p>
              <strong>Hướng dẫn đặt hàng</strong>
            </p>
            <p>
              <strong>Về Vietgangz</strong>
            </p>
            <p>
              <strong>Chính sách bảo mật</strong>
            </p>
            <p>
              <strong>Kiểm tra đơn hàng</strong>
            </p>
          </div>
        </div>

        <div className="footer-3">
          <strong>STORE IN VIETNAM</strong>
          <div className="tittle-color"></div>
          <div>
            <strong>STORE HA NOI</strong>
          </div>
          <div>▪ 35 Alley 268/21 Gia Thuong Str, Long Bien Dist, Hanoi</div>
          <div>
            <strong>Hotline: 0702001202</strong>
          </div>
          <div>----------</div>

          <div>
            <strong>STORE TP.HCM</strong>
          </div>

          <div>
            ▪ 126E Phan Dang Luu Str, Phuong 3 Ward – Dist.Phu Nhuan, Ho Chi
            Minh
          </div>
          <div>
            <strong>Hotline: 0702001202</strong>
          </div>
          <div>----------</div>

          <div>
            <strong>STORE HAI PHONG</strong>
          </div>

          <div>▪ 39/94 Le Loi, Gia Vien - Ngo Quyen, Hai Phong</div>
          <div>
            <strong>Hotline: 0934201786</strong>
          </div>
          <div>----------</div>

          <div>
            <strong>STORE BAC GIANG</strong>
          </div>

          <div>▪ 90 Ngo Gia Tu, Ngo Quyen, Bac Giang</div>
          <div>
            <strong>Hotline: 0395878333</strong>
          </div>
          <div>----------</div>

          <div>
            <strong>STORE DA NANG</strong>
          </div>

          <div>▪ 206 Phan Dang Luu Str, Hai Chau Dist</div>
          <div>
            <strong>Hotline: 0559999969</strong>
          </div>
          <div>▪ 1 Yet Kieu Str, Son Tra Dist</div>
          <div>
            <strong>Hotline: 0559678910</strong>
          </div>
          <div>----------</div>

          <div>
            <span>
              <strong>Contact us:</strong>ceo@vietgangz.com
            </span>
          </div>
        </div>

        <div className="footer-4">
          <strong>FACEBOOK</strong>
          <div className="tittle-color"></div>
        </div>
      
      </footer>
      <div className="end-footer">
        Copyright 2023 ©<strong>Vietgangz</strong>
      </div>
      {/* END FOOTER */}
    </div>
  );
}

export default App;
