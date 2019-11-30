import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header>
      <div className="Header-content">
        <h1>HEADLINE</h1>
        <div className="Header-logo">
          LOGO ZONE
        </div>
        <span className="Header-description">
          Description here needed
        </span>
        <a href="/#" className="Header-action">Call to Action</a>
      </div>
    </header>
  );
}

export default Header;
