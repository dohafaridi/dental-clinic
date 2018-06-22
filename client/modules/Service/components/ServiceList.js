import React, { PropTypes } from 'react';

import ServiceListItem from './ServiceListItem/ServiceListItem';

const ServiceList = ({ services }) =>
  (services ? (
    <div className="ServiceList">
      {services.map(service => (
        <ServiceListItem key={service.cuid} service={service} />
      ))}
    </div>
  ) : null);

ServiceList.propTypes = {
  services: PropTypes.array,
};

export default ServiceList;
