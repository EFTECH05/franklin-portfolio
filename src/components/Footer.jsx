import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-line"></div>

        <p>
          © {new Date().getFullYear()} Franklin Ngangu. All rights reserved.
        </p>

        <div className="footer-line"></div>
      </div>
    </footer>
  );
}

export default Footer;
