import React from 'react';
import { Link } from 'react-router';

import styles from './AboutUs.css';

const AboutUs = () => (
  <div className={styles.AboutUs}>
    <h2 className={styles.AboutUs__tilte}>dental clinic</h2>
    <div className={styles.AboutUs__content}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
      aliquid cupiditate doloribus et fuga iste non odit, soluta voluptatum.
      Cumque dicta facilis harum illo qui quod, ratione sed temporibus?
    </div>
    <div className={styles.AboutUs__chevron}>
      <Link to="/about-us">
        <span>></span>
      </Link>
    </div>
  </div>
);

export default AboutUs;
