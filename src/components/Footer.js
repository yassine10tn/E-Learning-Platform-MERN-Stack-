import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-secondary text-white p-3 ">
      <div className="text-center">
        <h5>Follow us on social media</h5>
        <a href="/" className="text-white m-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white m-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-white m-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="text-center ">
        <p>&copy; 2024 Hel Mokhék. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
