import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import LoginDropdownContainer from '../../../LoginDropdown/LoginDropdownContainer';
// Import Style
import styles from './Header.css';

const Header = (props, context) => {
  const languageNodes = props.intl.enabledLanguages.map(lang => (
    <li
      key={lang}
      onClick={() => props.switchLanguage(lang)}
      className={
        lang === props.intl.locale
          ? styles['Header__icons--language-switcher__active']
          : ''
      }
    >
      {lang}
    </li>
  ));

  const headerClasses = `${styles.Header} ${
    context.router.isActive('/', true) ? '' : styles['Header__internal-pages']
  }`;
  return (
    <header className={headerClasses}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-md-4">
              <Link to="/" className={styles.Header__logo}>
                <i className="Header__logo-fa fas fa-tooth" aria-hidden="true" />
                <div className={styles['Header__logo-slogan']}>
                  dental <span>clinic</span>
                </div>
              </Link>
            </div>
            <div className="col-xs-5 col-md-4">
              <LoginDropdownContainer />
            </div>
            <div className="col-xs-3 col-md-4">
              <div className={styles.Header__icons}>
                <div className={styles['Header__icons--social']}>
                  <a href="#">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </div>
                <div className={styles['Header__icons--language-switcher']}>
                  <ul>{languageNodes}</ul>
                </div>
                <span className={styles['Header__icons--slide-menu']}>
                  <i className="fa fa-align-left" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {props.isAdmin ? (<div className="row">
          <div className={styles['Header__admin--menu']}>
            {context.router.isActive('/services', true) ? (
              <a href="#" onClick={props.toggleShowServiceWidget}>
                <FormattedMessage id="addService" />
              </a>
            ) : null}
            {context.router.isActive('/testimonials', true) ? (
              <a href="#" onClick={props.toggleShowTestimonialWidget}>
                <FormattedMessage id="addTestimonial" />
              </a>
            ) : null}
            {context.router.isActive('/patients', true) ? (
              <a href="#" onClick={props.toggleShowPatientWidget}>
                <FormattedMessage id="addPatient" />
              </a>
            ) : null}
          </div>
        </div>) : null}
      </nav>
    </header>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  toggleShowServiceWidget: PropTypes.func.isRequired,
  toggleShowTestimonialWidget: PropTypes.func.isRequired,
  toggleShowPatientWidget: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
};

export default Header;
