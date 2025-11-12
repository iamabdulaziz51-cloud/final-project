import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">TravelWorld</div>

        {/* Navigation Links */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#destinations" onClick={() => setIsOpen(fa
