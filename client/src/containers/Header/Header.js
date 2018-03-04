import React from 'react';

import NavLinkStandard from '../../components/NavLinkStandard/NavLinkStandard';

import logo from '../../logo.svg';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLinkStandard exact path="/" label="Home" />
          <NavLinkStandard path="/test" label="Test" />
        </li>
      </ul>
    </nav>
    <img src={logo} className={styles.logo} alt="logo" />
    <h1 className={styles.title}>Welcome to React</h1>
  </header>
);

export default Header;
