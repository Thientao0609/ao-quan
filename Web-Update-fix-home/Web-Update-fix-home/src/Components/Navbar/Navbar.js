import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faStore,
  faHouse,
  faBaby,
  faPeopleGroup,
  faPersonDress,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Contexts/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const topRef = useRef(null);
  const top2Ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const top = topRef.current;
      const top2 = top2Ref.current;
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Khi cuộn xuống
        top?.classList.add("hidden");
        setIsFixed(true);
      } else if (currentScrollY < lastScrollY) {
        // Khi cuộn lên
        top?.classList.remove("hidden");
        setIsFixed(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="tp_header" style={{ marginBottom: "200px" }}>
      <div className="top hidden-sm hidden-xs tp_header" ref={topRef}>
        <div className="container">
          <div className="row align-items-center d-flex justify-content-between">
            <div className="col-md-8 col-sm-12 d-flex no-padding position-relative">
              {/*Logo*/}
              <div className="col-md-3 col-sm-12 logoTop">
                <div className="logo">
                  <a href="£" title="logo">
                    <img
                      alt="Logo"
                      src="https://pos.nvncdn.com/69e708-173581/store/20240425_lHnv9RXr.png"
                    />
                  </a>
                </div>
              </div>
              {/*Search*/}
              <div
                className="col-md-9 col-sm-12 no-padding searchTop"
                id="searchtop"
              >
                <div className="search-collection col-xs-12 no-padding">
                  <form className="search align-items-center" action="/search">
                    <div className="input-group">
                      <input
                        type="text"
                        id="text-product"
                        placeholder="Tìm kiếm sản phẩm bạn muốn mua"
                      />
                      <button id="search-button" className="btn btn-primary">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="icon-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 d-flex">
              <div className="col-md-9 col-sm-12 formLoginRegister">
                <div className="row d-flex">
                  <div className="headStore_wrapper">
                    <ul className="header-user d-none d-md-block">
                      <li>
                        <Link to="/login" className="but-login">
                          <p>Dang nhap |</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="but-register">
                          <p>Dang ky</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 cartShopping">
                <div className="row">
                  <div className="crattop_wrapper">
                    <div id="cart_block" className="cart_relative">
                      <div className="cart-total-price">
                        <Link to="/cart" id="faShop">
                          <FontAwesomeIcon
                            icon={faStore}
                            id="icon-Shopping"
                          />
                        </Link>
                        <span className="hidden">0 đ</span>
                        <span>
                          0<sup> đ</sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`top2 hidden-sm hidden-md ${isFixed ? "fixed" : ""}`} ref={top2Ref}>
        <div className="container-fluid menutopid tp_menu d-flex" style={{ background: "#F0F0F0" }}>
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-12">
                <ul className="menu-top clearfix hidden-sm">
                  <li className="menu-li hasChild tp_menu_item">
                    <Link to="/product" className="nav-express">
                      <div className="coll-icon">
                        <span className="ico-top">
                          <FontAwesomeIcon icon={faHouse} id="icon-home" />
                        </span>
                        <span className="title-main-menu tp_menu_item">HOME</span>
                      </div>
                    </Link>
                  </li>
                  <li className="menu-li hasChild tp_menu_item">
                    <Link to="/man" className="nav-express">
                      <div className="coll-icon">
                        <span className="ico-top">
                          <FontAwesomeIcon icon={faPerson} id="icon-man" />
                        </span>
                        <span className="title-main-menu tp_menu_item">MAN</span>
                      </div>
                    </Link>
                    <ul className="submenu">
                      <li><Link to="/jacket" className="nav-express">Áo Khoác</Link></li>
                      <li><Link to="/man/polos" className="nav-express">Áo Polo</Link></li>
                      <li><Link to="/man/tanktops" className="nav-express">Áo Ba Lỗ</Link></li>
                      <li><Link to="/man/hoodies" className="nav-express">Áo Hoodie</Link></li>
                    </ul>
                  </li>
                  <li className="menu-li hasChild tp_menu_item">
                    <Link to="/woman" className="nav-express">
                      <div className="coll-icon">
                        <span className="ico-top">
                          <FontAwesomeIcon icon={faPersonDress} id="icon-home" />
                        </span>
                        <span className="title-main-menu tp_menu_item">WOMEN</span>
                      </div>
                    </Link>
                  </li>
                  <li className="menu-li hasChild tp_menu_item">
                    <Link to="/kid" className="nav-express">
                      <div className="coll-icon">
                        <span className="ico-top">
                          <FontAwesomeIcon icon={faBaby} id="icon-home" />
                        </span>
                        <span className="title-main-menu tp_menu_item">KIDS</span>
                      </div>
                    </Link>
                  </li>
                  <li className="menu-li hasChild tp_menu_item">
                    <Link to="/product" className="nav-express">
                      <div className="coll-icon">
                        <span className="ico-top">
                          <FontAwesomeIcon icon={faPeopleGroup} id="icon-home" />
                        </span>
                        <span className="title-main-menu tp_menu_item">ABOUT US</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
