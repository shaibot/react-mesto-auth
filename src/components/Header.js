import React from 'react';
import headerLogo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <>
      <header className="header">
        <img
          src={headerLogo}
          alt='Логотип в виде слов на латиннице, написано Место Россия.'
          className="header__logo"
        />
        {children}
      </header>
    </>
  )
}
export default Header;