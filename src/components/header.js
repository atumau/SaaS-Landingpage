import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
const header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            <img src="looo.png" className="logo" alt="home-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/features"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
