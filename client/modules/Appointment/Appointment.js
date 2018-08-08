import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppointmentWidget from './components/AppointmentWidget/AppointmentWidget';

class Appointment extends Component {
  constructor(props) {
    super(props);

    this.manageAppointment = this.manageAppointment.bind(this);
  }

  manageAppointment() {}

  render() {
    return (
      <div className="Appointment">
        <AppointmentWidget />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

Appointment.propTypes = {};

export default connect(mapStateToProps)(Appointment);
