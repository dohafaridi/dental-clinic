import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

const Footer = ({ isAdmin }) => {
  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className={styles.Footer__links}>
            <ul>
              <li>
                <Link to="/"><FormattedMessage id="homeLabel" /></Link>
              </li>
              <li className="semicolon">:</li>
              <li>
                <Link to="/services"><FormattedMessage id="serviceLabel" /></Link>
              </li>
              <li className="semicolon">:</li>
              <li>
                <Link to="/testimonials"><FormattedMessage id="testimonialLabel" /></Link>
              </li>
              <li className="semicolon">:</li>
              <li>
                <Link to="/appointment"><FormattedMessage id="appointmentLabel" /></Link>
              </li>
              <li className={styles.semicolon}>:</li>
              {isAdmin ? (
                <li>
                  <Link to="/patients"><FormattedMessage id="patientLabel" /></Link>
                </li>
              ) : null}
            </ul>
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
