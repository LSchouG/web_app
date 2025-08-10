// src/navBar/NavBar.jsx
import React, { useState } from 'react';
import './NavBar.css'; 
import diagonalImage from '../Components/Assest/diagonal.jpg'; // Note: 'Assest' might be a typo; assuming it's 'Assets'
import { useMenuToggle, useScreenSize } from './NavBarLogic'; // Import hooks from the JS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
  const { menuOpen, toggleMenu, handleMouseEnter, handleMouseLeave } = useMenuToggle(2000); // 2 sec auto-close
  const isSmallScreen = useScreenSize(768); // Breakpoint at 768px.

  const logoText = isSmallScreen 
    ? 'Web & App<br>Lars Gregersen'
    : 'Web & App<br>Lars Schou Gregersen';

  const [menu, setMenu] = useState("forside"); // Fixed syntax, changed to conventional setMenu, initial value to match a menu item

  return (  
    <div className={`navbar menu ${menuOpen ? 'active' : ''}`}>
      <div className="nav-logo">
        <h1 dangerouslySetInnerHTML={{ __html: logoText }}></h1>
      </div>

      <div className="nav-image">
        <img src={diagonalImage} alt="Dekorativt billede" />
      </div>

      <nav className="nav-menu">
        <ul className="menu-links inline">
          <li onClick={() => {setMenu("forside")}}><Link to='/'>Forside</Link>{menu === "forside" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("portfolio")}}><Link to='/portfolio'>Portefølje</Link>{menu === "portfolio" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("om mig")}}><Link to='/about'>Om mig</Link>{menu === "om mig" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("services")}}><Link to='/services'>Services</Link>{menu === "services" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("prisliste")}}><Link to='/prices'>Prisliste</Link>{menu === "prisliste" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("kontakt")}}><Link to='/contact'>Kontakt</Link>{menu === "kontakt" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("login")}}><Link to='/login'>Login</Link>{menu === "login" ? <hr/> : <></>}</li>
        </ul>
        <ul 
          className="menu-links dropdown" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li onClick={() => {setMenu("forside")}}><Link to='/'>Forside</Link>{menu === "forside" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("portfolio")}}><Link to='/portfolio'>Portefølje</Link>{menu === "portfolio" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("om mig")}}><Link to='/about'>Om mig</Link>{menu === "om mig" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("services")}}><Link to='/services'>Services</Link>{menu === "services" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("prisliste")}}><Link to='/prices'>Prisliste</Link>{menu === "prisliste" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("kontakt")}}><Link to='/contact'>Kontakt</Link>{menu === "kontakt" ? <hr/> : <></>}</li>
          <li className="dropdown-only" onClick={() => {setMenu("login")}}><Link to='/login'>Login</Link>{menu === "login" ? <hr/> : <></>}</li>
        </ul>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </div>
  );
};

export default NavBar;