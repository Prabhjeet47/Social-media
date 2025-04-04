import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>SOCIALLY Created by Prabhjeet Singh</p>
        <p>
          Contact: &nbsp;
          <a href="mailto:prabhsmanku@gmail.com">prabhsmanku@gmail.com</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Prabhjeet Singh. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
