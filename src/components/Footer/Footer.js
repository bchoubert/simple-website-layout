import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="links">
          <a href="/#">Privacy Policy</a>
          <FontAwesomeIcon icon={faCircle} fixedWidth />
          <a href="/#">Help</a>
          <FontAwesomeIcon icon={faCircle} fixedWidth />
          <a href="/#">License</a>
        </div>
        <span className="copyright">
          <FontAwesomeIcon icon={faCopyright} fixedWidth />
          Copyright 2019
        </span>
        <div className="networks">
          <FontAwesomeIcon icon={faFacebook} fixedWidth />
          <FontAwesomeIcon icon={faTwitter} fixedWidth />
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
        </div>
      </div>
    </div>
  );
}

export default Footer;
