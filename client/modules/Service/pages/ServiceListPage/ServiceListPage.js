import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ServiceList from '../../components/ServiceList';
import ServiceWidget from '../../components/ServiceWidget/ServiceWidget';
import {
  addServiceRequest,
  fetchServices,
  editServiceRequest,
  deleteServiceRequest,
} from '../../ServiceActions';
import { toggleShowServiceWidget } from '../../../App/AppActions';
import { setDefaultServiceWidgetValues } from '../../components/ServiceWidget/ServiceWidgetActions';

class ServiceListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchServices());

    this.handleAddService = this.handleAddService.bind(this);
    this.handleDeleteService = this.handleDeleteService.bind(this);
    this.handleEditService = this.handleEditService.bind(this);
  }

  handleAddService(title, content) {
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(addServiceRequest({ title, content }));
  }

  handleEditService(cuid) {
    this.props.dispatch(
      setDefaultServiceWidgetValues({
        serviceWidgetTitle: 'createNewService',
        titleInputValue: 'TODO',
        contentTextareaValue: 'TODO',
      })
    );
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(editServiceRequest(cuid));
  }

  handleDeleteService(cuid) {
    if (confirm('Do you want to delete this service')) { // eslint-disable-line
      this.props.dispatch(deleteServiceRequest(cuid));
    }
  }

  render() {
    return (
      <div className="ServiceListPage">
        <ServiceWidget
          manageService={this.handleAddService}
          showServiceWidget={this.props.showServiceWidget}
        />
        <ServiceList
          handleDeleteService={this.handleDeleteService}
          handleEditService={this.handleEditService}
          services={this.props.services}
        />
      </div>
    );
  }
}

// Actions required to provide data for ServiceListPage to render in sever side.
ServiceListPage.need = [
  () => {
    return fetchServices();
  },
];

const mapStateToProps = state => ({
  showServiceWidget: state.app.showServiceWidget,
  services: state.services.data,
});

ServiceListPage.propTypes = {
  services: PropTypes.array,
  showServiceWidget: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ServiceListPage);