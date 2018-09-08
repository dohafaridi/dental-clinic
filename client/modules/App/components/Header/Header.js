import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import LoginDropdownContainer from '../../../LoginDropdown/LoginDropdownContainer';

// Import Style
import styles from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarClosed: true,
    };
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isSidebarClosed: true,
      });
    }
  }

  handleSidebarClose() {
    this.setState({
      isSidebarClosed: !this.state.isSidebarClosed,
    });
  }

  render() {
    const languageNodes = this.props.intl.enabledLanguages.map(lang => (
      <li
        key={lang}
        onClick={() => this.props.switchLanguage(lang)}
        className={
          lang === this.props.intl.locale
            ? styles['Header__icons--language-switcher__active']
            : ''
        }
      >
        {lang}
      </li>
    ));
    const headerClasses = `${styles.Header} ${
      this.props.location.pathname === '/' ? '' : styles['Header__internal-pages']
    }`;

    return (
      <header className={headerClasses}>
        <SidebarMenu isSidebarClosed={this.state.isSidebarClosed} location={location} />
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
                  <span className={styles['Header__icons--slide-menu']} onClick={this.handleSidebarClose}>
                    <i className="fa fa-align-left" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {this.props.isAdmin ? (<div className="row">
            <div className={styles['Header__admin--menu']}>
              {this.props.location.pathname === '/services' ? (
                <a href="#" onClick={this.props.toggleShowServiceWidget}>
                  <FormattedMessage id="addService" />
                </a>
              ) : null}
              {this.props.location.pathname === '/testimonials' ? (
                <a href="#" onClick={this.props.toggleShowTestimonialWidget}>
                  <FormattedMessage id="addTestimonial" />
                </a>
              ) : null}
              {this.props.location.pathname === '/patients' ? (
                <a href="#" onClick={this.props.toggleShowPatientWidget}>
                  <FormattedMessage id="addPatient" />
                </a>
              ) : null}
            </div>
          </div>) : null}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  toggleShowServiceWidget: PropTypes.func.isRequired,
  toggleShowTestimonialWidget: PropTypes.func.isRequired,
  toggleShowPatientWidget: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
  location: PropTypes.object,
};

export default Header;
