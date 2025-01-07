import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'; // Styl dla Navbara

const Navbar = () => {
  return (
    <header id="header">
    <div className="navbar">
    
      <NavLink to="/" className="navbar-logo">
        <i className="fas fa-video"></i>
        <span>MovieStudyGroup</span>
      </NavLink>

        <nav className="navigation">
            <div className="navbar-links">
                <NavLink to="/" className="link" activeClassName="active">Movies & shows</NavLink>
                <NavLink to="/mylist" className="link" activeClassName="active">My List</NavLink>
            </div>
            <div className="divider"></div>
            <div className="navbar-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="search..." />
            </div>
        </nav>
    </div>
    </header>

  );
};

export default Navbar;