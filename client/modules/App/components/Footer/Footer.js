import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import MenuLinks from '../MenuLinks/MenuLinks';

// Import Style
import styles from './Footer.css';

const Footer = ({ isAdmin, isPatient }) => {
  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className={styles.Footer__links}>
            <MenuLinks isAdmin={isAdmin} isPatient={isPatient} styles={styles} />
          </div>
          <p className={styles.Footer__copyright}>
            <FormattedMessage id="appRights" />
            <span>
              <Link
                to="https://github.com/dohafaridi/dental-clinic"
                target="_blank"
              >
                Doha Faridi
              </Link>
            </span>
          </p>
        </div>
        <div className={styles.Footer__logo}>
          <Link to="/">
            <i className="Header__logo-fa fas fa-tooth" aria-hidden="true" />
            <div className={styles['Footer__logo-slogan']}>
              dental <span>clinic</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
