import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './ServiceListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const ServiceListItem = ({ service }) => (
  <article className={styles.ServiceListItem}>
    <div className={styles.ServiceListItem__title}>
      <Link to={`/services/${service.slug}`} title={service.title}>
        {service.title}
      </Link>
    </div>
    <div className={styles.ServiceListItem__content}>
      {renderContent(service.content)}...
    </div>
    <Link
      to={`/services/${service.slug}`}
      className={styles.ServiceListItem__readmore}
    >
      {<FormattedMessage id="readMore" />}
    </Link>
  </article>
);

ServiceListItem.propTypes = {
  service: PropTypes.object,
};

export default ServiceListItem;
