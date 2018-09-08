import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

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

    this.handleServiceWidgetSubmit = this.handleServiceWidgetSubmit.bind(this);
    this.toggleShowServiceWidgetSection = this.toggleShowServiceWidgetSection.bind(this);
    this.handleAddService = this.handleAddService.bind(this);
    this.handleDeleteService = this.handleDeleteService.bind(this);
    this.handleEditService = this.handleEditService.bind(this);
  }

  handleServiceWidgetSubmit(title, content) {
    this.props.widgetValues.serviceWidgetTitleIntId === 'editTheService' // eslint-disable-line
      ? this.handleEditService(title, content, this.props.widgetValues.cuid)
      : this.handleAddService(title, content);
  }

  handleAddService(title, content) {
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(addServiceRequest({ title, content }));
  }

  handleEditService(title, content, cuid) {
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(editServiceRequest(title, content, cuid));
  }

  toggleShowServiceWidgetSection(service) {
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(
      setDefaultServiceWidgetValues({
        serviceWidgetTitleIntId: 'editTheService',
        titleInputValue: service.title,
        contentTextareaValue: service.content,
        cuid: service.cuid,
      })
    );
  }

  handleDeleteService(cuid) {
    if (confirm('Do you want to delete this service')) { // eslint-disable-line
      this.props.dispatch(deleteServiceRequest(cuid));
    }
  }

  render() {
    const componentContent = (
      <div className="ServiceListPage">
        <ServiceWidget
          manageService={this.handleServiceWidgetSubmit}
          showServiceWidget={this.props.showServiceWidget}
        />
        <ServiceList
          handleDeleteService={this.handleDeleteService}
          handleEditService={this.toggleShowServiceWidgetSection}
          services={this.props.services}
          isAdmin={this.props.userStatus.isAdmin}
        />
      </div>
    );
    const emptyCollectionMessage = (
      <FormattedMessage
        id="emptyCollectionMessage"
        values={{ collection: 'services' }}
      />
    );

    return this.props.services.length || this.props.showServiceWidget
      ? componentContent
      : emptyCollectionMessage;
  }
}

// Actions required to provide data for ServiceListPage to render in sever side.
ServiceListPage.need = [
  () => {
    return fetchServices();
  },
];

const mapStateToProps = state => ({
  widgetValues: state.servicesWidget.defaultValues,
  showServiceWidget: state.app.showServiceWidget,
  services: state.services.data,
});

ServiceListPage.propTypes = {
  services: PropTypes.array,
  showServiceWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ServiceListPage);
