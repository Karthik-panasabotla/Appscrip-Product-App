import React from "react";
import "./Footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* Newsletter */}
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE →</button>
          </div>
        </div>

        {/* Contact */}
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        {/* Currency */}
        <div className="currency">
          <h3>CURRENCY</h3>
          <div className="currency-box">
            <img
              src="https://flagcdn.com/16x12/in.png"
              alt="currency-flag"
              className="flag-icon"
            />
            <span>INR</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in INR.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <div className="links">
          <h4>mettā muse</h4>
          <a href="#about">About Us</a>
          <a href="#stories">Stories</a>
          <a href="#artisans">Artisans</a>
          <a href="#boutiques">Boutiques</a>
          <a href="#contact">Contact Us</a>
          <a href="#eucompliances">EU Compliances Docs</a>
        </div>

        <div className="links">
          <h4>QUICK LINKS</h4>
          <a href="#Orders">Orders & Shipping</a>
          <a href="#Join">Join/Login as a Seller</a>
          <a href="#Payment">Payment & Pricing</a>
          <a href="#Return">Return & Refunds</a>
          <a href="#FAQs">FAQs</a>
          <a href="#Privacy">Privacy Policy</a>
          <a href="#Terms">Terms & Conditions</a>
        </div>

        <div className="social-payments">
          <div>
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </div>

          <div className="payments">
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-logos">
              <img
                src=""
                alt="GPay"
              />
              <img
                src=""
                alt="Mastercard"
              />
              <img
                src=""
                alt="PayPal"
              />
              <img
                src=""
                alt="Amex"
              />
              <img
                src=""
                alt="Apple Pay"
              />
              <img
                src=""
                alt="Shop Pay"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2025 Appscrip Demo Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
