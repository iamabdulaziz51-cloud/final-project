// header.jsx
import React from 'react';
import Social from '.Social'
import './header.css'; // optional CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyWebsite</h1>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact"></a>
        
</nav>
</header>
  );
}