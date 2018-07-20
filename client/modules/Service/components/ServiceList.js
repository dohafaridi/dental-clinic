import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import ServiceListItem from './ServiceListItem/ServiceListItem';
import styles from './ServiceList.css';

const ServiceList = ({ services, handleDeleteService, handleEditService }) =>
  (services ? (
    <div className={styles.ServiceList}>
      <h1 className={styles.ServiceList__title}>
        <FormattedMessage id="serviceLabel" />
      </h1>
      {services.map(service => (
        <ServiceListItem
          key={service.cuid}
          service={service}
          onDelete={() => handleDeleteService(service.cuid)}
          onEdit={() => handleEditService(service)}
        />
      ))}
    </div>
  ) : null);

ServiceList.propTypes = {
  services: PropTypes.array,
  handleDeleteService: PropTypes.func.isRequired,
  handleEditService: PropTypes.func.isRequired,
};

export default ServiceList;
