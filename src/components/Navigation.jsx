import React from 'react';
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

export default function Navigation() {
  // const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    // <div>
    //   <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //     <ul>
    //       <li>
    //         <a
    //           className="active"
    //           href="#home"
    //           style={{
    //             color: theme.color,
    //           }}
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#news"
    //           style={{
    //             color: theme.color,
    //           }}
    //         >
    //           News
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#about"
    //           style={{
    //             color: theme.color,
    //           }}
    //         >
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#contact"
    //           style={{
    //             color: theme.color,
    //           }}
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     </ul>

    //     <div style={{ position: 'relative' }}>
    //       <a
    //         className="switch-mode"
    //         href="#"
    //         onClick={toggle}
    //         style={{
    //           backgroundColor: theme.backgroundColor,
    //           color: theme.color,
    //           outline: 'none',
    //         }}
    //         data-testid="toggle-theme-btn"
    //       >
    //         Switch Nav to {!dark ? 'Dark' : 'Light'} mode
    //       </a>
    //     </div>
    //   </nav>
    // </div>

    <Navbar
      className="menu custom-navbar"
      alignLink="right"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li to="/news">
          <Link to="/news">
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li to="contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
