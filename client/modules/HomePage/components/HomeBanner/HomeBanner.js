import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import styles from './HomeBanner.css';

const HomeBanner = () => (
  <div className={styles.HomeBanner}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>
            <FormattedHTMLMessage id="HomeBannerSlogan" />
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default HomeBanner;
