import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaGem } from 'react-icons/fa';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () =>  {
  const [toggleMenu, setToggleMenu] = useState(false);


  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.Alogo} alt="Logo"/>
      </div>
      <ul className="app__navbar-links">
  <li className="p__opensans"><a href="#home">Home</a></li>
  <li className="p__opensans"><a href="#about">About</a></li>
  <li className="p__opensans"><a href="#menu">Menu</a></li>
  <li className="p__opensans"><a href="#galary">Gallery</a></li>
  <li className="p__opensans"><a href="#contact">Contact</a></li>
</ul>
<div className="app__navbar-login">
  <a href="#login" className="p__opensans">Log In / Register</a>
</div>
<div className="app__navbar-smallscreen">
  <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />


{toggleMenu && (
<div className="app__navbar-smallscreen_overlay flex__center fade-in">
<FaGem fontSize={27} className="overlay__close"  onClick={() => {setToggleMenu(false)}} />
<ul className="app__navbar-smallscreen_links">
  <li className="p__opensans" ><a href="#home" onClick={() => {setToggleMenu(false)}} >Home</a></li>
  <li className="p__opensans"><a href="#about" onClick={() => {setToggleMenu(false)}}>About</a></li>
  <li className="p__opensans"><a href="#menu" onClick={() => {setToggleMenu(false)}}>Menu</a></li>
  <li className="p__opensans"><a href="#galary" onClick={() => {setToggleMenu(false)}}>Gallery</a></li>
  <li className="p__opensans"><a href="#contact" onClick={() => {setToggleMenu(false)}}>Contact</a></li>
</ul>
</div>
)}
</div>
  </nav>
);
  }

export default Navbar;
