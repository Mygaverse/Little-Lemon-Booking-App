// components/Header/index.js
import React from 'react';
import Nav from '../Nav';
import MobileNav from '../MobileNav';
import './styles.css';

const Header = () => {
 return (
   <header>
     {/* Decision logic on using Nav or MobileNav based on screen size */}
     <Nav /> 
   </header>
 );
};

export default Header;
