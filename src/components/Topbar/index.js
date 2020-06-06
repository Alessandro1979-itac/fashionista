import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import Search from '../Search';
import Cart from '../Cart';

export default () => (
  <header>
    <div className="container header">
      <Link to="/" >
        <span className="header__logo">Fashionista</span>
      </Link>
      <div className="header__actions">
        <Search />
        <Cart />
      </div>
    </div>
  </header>
);
