import React, { PropTypes } from 'react';

const ServiceListItem = ({ service }) => (
  <div className="ServiceListItem">
    <div className="ServiceListItem__title">{service.title}</div>
    <div className="ServiceListItem__content">{service.content}</div>
  </div>
);

ServiceListItem.propTypes = {
  service: PropTypes.object,
};

export default ServiceListItem;
