
import {
  Headphones,
  Mail,
  MapPin,
  CreditCard,
  ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shopease-footer">

      <div className="footer-main">

        {/* ABOUT */}

        <div className="footer-column">
          <h3>ABOUT</h3>

          <Link to="/about">Contact Us</Link>
          <Link to="/about">About ShopEase</Link>
          <Link to="/about">Careers</Link>
          <Link to="/about">Corporate Information</Link>
          <Link to="/about">Our Stories</Link>
        </div>

        {/* GROUP COMPANIES */}

        <div className="footer-column">
          <h3>GROUP COMPANIES</h3>

          <a href="https://www.flipkart.com/" target="_blank" rel="noreferrer">
            Flipkart
          </a>
          <a href="https://www.myntra.com/" target="_blank" rel="noreferrer">
            Myntra
          </a>
          <a href="https://www.cleartrip.com/" target="_blank" rel="noreferrer">
            Cleartrip
          </a>
          <a href="https://www.shopsy.in/" target="_blank" rel="noreferrer">
            Shopsy
          </a>
        </div>

        {/* HELP */}

        <div className="footer-column">
          <h3>HELP</h3>

          <Link to="/cart">Payments</Link>
          <Link to="/orders">Shipping</Link>
          <Link to="/orders">Cancellation & Returns</Link>
          <Link to="/about">FAQ</Link>
          <Link to="/about">Report an Issue</Link>
        </div>

        {/* CONSUMER POLICY */}

        <div className="footer-column">
          <h3>CONSUMER POLICY</h3>

          <Link to="/about">Terms of Use</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Security</Link>
          <Link to="/about">Sitemap</Link>
          <Link to="/about">Grievance Redressal</Link>
        </div>

        {/* MAIL US */}

        <div className="footer-contact-column">
          <h3>MAIL US</h3>

          <p>
            <Mail size={16} />
            support@shopease.com
          </p>

          <p>
            For product enquiries, orders,
            payments and customer support,
            please contact our support team.
          </p>

            <div className="footer-social">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        f
                </a>

                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        ◎
                </a>

                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
                        X
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                        ▶
                </a>
            </div>
        </div>

        {/* REGISTERED OFFICE */}

        <div className="footer-contact-column registered-office">
          <h3>REGISTERED OFFICE ADDRESS</h3>

          <p>
            <MapPin size={18} />

            <span>
              ShopEase Private Limited,
              <br />
              2nd Floor, Business Centre,
              <br />
              Coimbatore, Tamil Nadu,
              <br />
              India - 641001.
            </span>
          </p>

          <p>
            <Mail size={16} />
            support@shopease.com
          </p>
        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-item">
          <Headphones size={19} />
          <span>24/7 Customer Support</span>
        </div>

        <div className="footer-bottom-item">
          <ShieldCheck size={19} />
          <span>Secure Shopping</span>
        </div>

        <div className="footer-bottom-item">
          <CreditCard size={19} />
          <span>Multiple Payment Options</span>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
