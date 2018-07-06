import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ServiceList from '../../components/ServiceList';
import ServiceCreateWidget from '../../components/ServiceCreateWidget/ServiceCreateWidget';
import { addServiceRequest, fetchServices, deleteServiceRequest } from '../../ServiceActions';
import { toggleAddService } from '../../../App/AppActions';

class ServiceListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchServices());
    this.handleAddService = this.handleAddService.bind(this);
    this.handleDeleteService = this.handleDeleteService.bind(this);
  }

  handleAddService(title, content) {
    this.props.dispatch(toggleAddService());
    this.props.dispatch(addServiceRequest({ title, content }));
  }

  handleDeleteService(service) {
    if (confirm('Do you want to delete this service')) { // eslint-disable-line
      this.props.dispatch(deleteServiceRequest(service));
    }
  }

  render() {
    return (
      <div className="ServiceListPage">
        <ServiceCreateWidget addService={this.handleAddService} showAddService={this.props.showAddService} />
        <ServiceList handleDeleteService={this.handleDeleteService} services={this.props.services} />
      </div>
    );
  }
}

// Actions required to provide data for ServiceListPage to render in sever side.
ServiceListPage.need = [() => { return fetchServices(); }];

const mapStateToProps = state => ({
  showAddService: state.app.showAddService,
  services: state.services.data,
});

ServiceListPage.propTypes = {
  services: PropTypes.array,
  showAddService: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ServiceListPage);
