import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import logo from './images/logo.png';

const Header = (props, context) => {
  const languageNodes = props.intl.enabledLanguages.map(lang => (
    <li
      key={lang}
      onClick={() => props.switchLanguage(lang)}
      className={lang === props.intl.locale ? styles['Header__icons--language-switcher__active'] : ''}
    >
      {lang}
    </li>
  ));

  return (
    <header className={styles.Header}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-2 col-md-1">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-xs-10 col-md-11">
              <div className={styles.Header__icons}>
                <div className={styles['Header__icons--social']}>
                  <a href="#">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-500px" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </div>
                <div className={styles['Header__icons--language-switcher']}>
                  <ul>
                    {languageNodes}
                  </ul>
                </div>
                <span className={styles['Header__icons--slide-menu']}>
                  <i className="fa fa-align-left" aria-hidden="true" />
                </span>
              </div>
              <div className={styles.Header__menu}>
                {
                  context.router.isActive('/services', true)
                    ? <a href="#" onClick={props.toggleShowServiceWidget}><FormattedMessage id="addService" /></a>
                    : null
                }
                {
                  context.router.isActive('/testimonials', true)
                    ? <a href="#" onClick={props.toggleShowTestimonialWidget}><FormattedMessage id="addTestimonial" /></a>
                    : null
                }
                {
                  context.router.isActive('/patients', true)
                    ? <a href="#" onClick={props.toggleShowPatientWidget}><FormattedMessage id="addPatient" /></a>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
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
};

export default Header;
