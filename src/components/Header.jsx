import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Header.css";

const Header = ({ cartCount, onCartClick }) => (
  <header className="header">
    <div className="lorem-container">
       <p>Lorem ipsum dolor</p>
       <p>Lorem ipsum dolor</p>
       <p>Lorem ipsum dolor</p>
    </div>
    <div className="logo-icons-container" >
      <div>
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrE8pi4SzjBnodhtwKYbwz-WXLA7903d4znNj1Snrp7BJU_xCd"
          alt="Company logo"
          className="logo"
        />
      </div>
     <div>
        <h1 className="logo-name">LOGO</h1>
     </div>
      <div className="icons-container">
        <i className="bi bi-search icons"></i>
        <i className="bi bi-heart icons"></i>
        <div className="cart-icon-container" onClick={onCartClick} title="Shopping Bag" style={{ cursor: "pointer" }}>
          <i className="bi bi-handbag icons"></i>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <i className="bi bi-person icons"></i>
        <select>
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="FR">FR</option>
        </select>
      </div>
    </div>
    <div className="nav-links-container">
      <nav className="nav-links">
        <a href="#shop" className="nav-link">SHOP</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#stories" className="nav-link">STORIES</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
      </nav>
    </div>
    <hr/>
    <div>
      <h1 className="discover-text">DISCOVER OUR PRODUCTS</h1>
      <p className="content">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>
    <hr/>
  </header>
);

export default Header;
