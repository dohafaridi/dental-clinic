import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './ServiceListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const ServiceListItem = ({ service, onDelete, onEdit }) => (
  <article className={styles.ServiceListItem}>
    <div className={styles.ServiceListItem__title}>
      <Link to={`/services/${service.slug}`} title={service.title}>
        {service.title}
      </Link>
    </div>
    <div className={styles.ServiceListItem__content}>
      {renderContent(service.content)}...
    </div>
    <div className={styles.ServiceListItem__links}>
      <a
        href="#"
        className={styles['ServiceListItem__links--item']}
        onClick={onEdit}
      >
        <FormattedMessage id="editService" />
      </a>
      <a
        href="#"
        className={styles['ServiceListItem__links--item']}
        onClick={onDelete}
      >
        <FormattedMessage id="deleteService" />
      </a>
      <Link
        to={`/services/${service.slug}`}
        className={styles['ServiceListItem__links--item']}
      >
        {<FormattedMessage id="readMore" />}
      </Link>
    </div>
  </article>
);

ServiceListItem.propTypes = {
  service: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ServiceListItem;
