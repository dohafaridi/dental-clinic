import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  fetchAppointments,
  fetchAppointmentsByPatientID,
} from './AppointmentActions';
import AppointmentList from './components/AppointmentList';
import AppointmentWidget from './components/AppointmentWidget/AppointmentWidget';

class Appointment extends Component {
  componentDidMount() {
    const funcToDispatch = () =>
      (
      this.props.patientID
        ? fetchAppointmentsByPatientID(this.props.patientID)
        : fetchAppointments()
      );
    this.props.dispatch(funcToDispatch());
  }

  render() {
    return (
      <div className="Appointment">
        {this.props.location &&
        this.props.location.pathname === '/appointment' ? (
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
