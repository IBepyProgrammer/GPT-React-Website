import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt">What is GPT</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
        {
          toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> //if mobile menu is currently opened this will allow you to close it
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> // if mobile menu is currently closed this will allow you to open it
        }
        {
          toggleMenu && (
            <div className="gpt__navbar-menu_container scale-up-center">
              <div className="gpt__navbar-menu_container-links">
                <Menu />
                <div className="gpt__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar