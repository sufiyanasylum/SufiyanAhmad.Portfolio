import React from 'react'
import './Nav.css'
import {FiHome} from 'react-icons/fi';
import  {AiOutlineInfoCircle} from 'react-icons/ai';
import {GiNotebook} from 'react-icons/gi';
// import {FcServices} from 'react-icons/fc';
import {IoIosCodeWorking} from 'react-icons/io'
import {FiMessageCircle} from 'react-icons/fi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
      <nav>
          <a href={"#"} className={activeNav === '#' ? 'active' : ''} onClick={ () => setActiveNav('#') }><FiHome /></a>
          <a href={"#about"} className={activeNav === 'about' ? 'active' : ''} onClick={ () => setActiveNav('about') }><AiOutlineInfoCircle /></a>
          <a href={"#experience"} className={activeNav === 'experience' ? 'active' : ''} onClick={ () => setActiveNav('experience') }><GiNotebook /></a>
          <a href={"#portfolio"} className={activeNav === 'portfolio' ? 'active' : ''} onClick={ () => setActiveNav('portfolio') }><IoIosCodeWorking/></a>
          <a href={"#contact"} className={activeNav === 'contact' ? 'active' : ''} onClick={ () => setActiveNav('contact') }><FiMessageCircle /></a>
      </nav>
  )
}




export default Nav