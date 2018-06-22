import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ServiceList from '../components/ServiceList';
import { fetchServices } from '../ServiceActions';

class ServiceListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchServices());
  }

  render() {
    return (
      <div className="ServiceListPage">
        <ServiceList services={this.props.services} />
      </div>
    );
  }
}

// Actions required to provide data for ServiceListPage to render in sever side.
ServiceListPage.need = [() => { return fetchServices(); }];

const mapStateToProps = state => ({
  services: state.services.data,
});

ServiceListPage.propTypes = {
  services: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ServiceListPage);
