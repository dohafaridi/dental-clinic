import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const MenuLinks = ({ isAdmin, isSidebar, styles }) => {
  return (
    <ul>
      <li>
        <Link to="/"><FormattedMessage id="homeLabel" /></Link>
      </li>
      <li className={styles.semicolon}>:</li>
      <li>
        <Link to="/services"><FormattedMessage id="serviceLabel" /></Link>
      </li>
      <li className={styles.semicolon}>:</li>
      <li>
        <Link to="/testimonials"><FormattedMessage id="testimonialLabel" /></Link>
      </li>
      <li className={styles.semicolon}>:</li>
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
  );
};

export default MenuLinks;
