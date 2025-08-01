import React from 'react';

function Navbar() {
    return ( 
         <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-dark fs-3" href="#">
          SureInsure
        </a>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  align-items-lg-center gap-3 ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">Services</a>
            </li>
            <li className="nav-item ms-5">
              <a className="btn navbtn btn-success px-3 px-3 py-2 " href="#">
                Get A Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     );
}

export default Navbar;