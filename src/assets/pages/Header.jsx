import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "../components/HeaderStyle.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
      
         <NavLink to="/">
          <img
            src="/images/quechilly.png"
            alt="quechilly image"
            className="logo-img"
          />
        </NavLink>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoClose size={32} className="icon" />
          ) : (
            <HiMenuAlt3 size={32} className="icon" />
          )}
        </div>

        <nav className={`header__nav ${isOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            Products
          </NavLink>
          <NavLink to="/reviews" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            Reviews
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
