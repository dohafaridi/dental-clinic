import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className={styles.Footer__links}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="semicolon">:</li>
              <li>
                <a href="/">services</a>
              </li>
            </ul>
          </div>
          <p className={styles.Footer__copyright}>
            <FormattedMessage id="appRights" />
            <span>
              <a
                href="https://github.com/dohafaridi/dental-clinic"
                target="_blank"
              >
                Doha Faridi
              </a>
            </span>
          </p>
        </div>
        <div className={styles.Footer__logo}>
          <a href="/">
            <img src={logo} alt="footer-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
