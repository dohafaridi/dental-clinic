import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchAppointments } from './AppointmentActions';
import AppointmentList from './components/AppointmentList';
import AppointmentWidget from './components/AppointmentWidget/AppointmentWidget';

class Appointment extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAppointments(this.props.patientID));
  }

  render() {
    return (
      <div className="Appointment">
        {this.props.location && this.props.location.pathname === '/appointment' ? (
          <AppointmentWidget />
        ) : (
          <AppointmentList appointments={this.props.appointments} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appointments: state.appointments.data,
});

Appointment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  appointments: PropTypes.array,
  location: PropTypes.object,
  patientID: PropTypes.string,
};

export default connect(mapStateToProps)(Appointment);
