import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import styles from './AboutUs.css';

const AboutUs = () => (
  <div className={styles.AboutUs}>
    <h2 className={styles.AboutUs__tilte}>
      <FormattedMessage id="siteTitle" />
    </h2>
    <div className={styles.AboutUs__content}>
      <FormattedHTMLMessage id="aboutUsContent" />
    </div>
  </div>
);

export default AboutUs;
