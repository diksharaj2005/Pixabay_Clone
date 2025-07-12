// src/components/Footer.jsx
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <span>
          &copy; {new Date().getFullYear()} <em>Pixabay Clone</em> — A tribute
          to creativity and open content. 🌿
        </span>
        <span>
          Crafted with <span style={{ color: "#ff4d6d" }}>♥</span> by{" "}
          <strong>Diksha Raj</strong> &nbsp;|&nbsp; Fueled by the magic of{" "}
          <a
            href="https://pixabay.com/api/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixabay API
          </a>
        </span>
       
      </div>
    </footer>
  );
};

export default Footer;
