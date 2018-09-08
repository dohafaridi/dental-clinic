import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './AboutUs.css';

const AboutUs = () => (
  <div className={styles.AboutUs}>
    <div className="container">
      <h2 className={styles.AboutUs__tilte}>
        <FormattedMessage id="siteTitle" />
      </h2>
      <div className={styles.AboutUs__content}>
        <FormattedMessage id="aboutUsSummary" />
      </div>
      <div className={styles.AboutUs__chevron}>
        <Link to="/about-us">
          <span>></span>
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
