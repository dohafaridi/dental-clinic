import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import PatientWidget from '../../../Patient/components/PatientWidget/PatientWidget';
import { addPatientRequest } from '../../../Patient/PatientActions';
import { addAppointmentRequest } from '../../AppointmentActions';

// Import Style
import styles from './AppointmentWidget.css';

const TEXTAREA_ROWS = '10';

// Those const will not more be hard coded once the authentication feature is implemented.
const isAnonymousUser = true;

export class AppointmentWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: this.props.widgetValues.dateInputValue || '',
      hourValue: this.props.widgetValues.hourInputValue || '',
      reasonValue: this.props.widgetValues.reasonTextareaValue || '',
      submittedAppointment: false,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handlePatientWidgetSubmit = this.handlePatientWidgetSubmit.bind(this);
    this.manageAppointment = this.manageAppointment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dateValue: nextProps.widgetValues.dateInputValue });
    this.setState({ hourValue: nextProps.widgetValues.hourInputValue });
    this.setState({ reasonValue: nextProps.widgetValues.reasonTextareaValue });

    // Once saving a new patient to the collection we should add the requested
    // appointment by calling manageAppointment func and specify patientID param
    if (nextProps.patients.length !== this.props.patients) {
      this.manageAppointment(nextProps.patients[nextProps.patients.length - 1].patientID);
    }
  }

  handleDateChange(event) {
    this.setState({ dateValue: event.target.value });
  }

  handleTimeChange(event) {
    this.setState({ hourValue: event.target.value });
  }

  handleReasonChange(event) {
    this.setState({ reasonValue: event.target.value });
  }

  handlePatientWidgetSubmit(
    firstName,
    lastName,
    sex,
    birthDay,
    phone,
    email,
    address,
    city,
    maritalStatus,
    company,
    doctor,
    insurance
  ) {
    this.props.dispatch(
      addPatientRequest({
        firstName,
        lastName,
        sex,
        birthDay,
        phone,
        email,
        address,
        city,
        maritalStatus,
        company,
        doctor,
        insurance,
      })
    );
  }

  /**
   * manageAppointment could be used as helper in the process of adding or
   * editing a appointment, on both operation date and reason are mandatory.
   */
  manageAppointment(patientID = '5b6082a0bccc0d4aac848bea') {
    const reason = this.refs.reason.value;
    const appointmentDate = this.refs.date.value;
    const appointmentHour = this.refs.time.value;
    if (appointmentDate && reason && appointmentHour) {
      this.props.dispatch(
        addAppointmentRequest({ reason, appointmentDate, appointmentHour, patientID })
      );
      this.setState({ submittedAppointment: true });

      this.refs.reason.value = this.refs.date.value = this.refs.time.value = '';
    }
  }

  render() {
    if (!this.props.widgetValues) {
      return null;
    }

    const appointmentForm = (
      <div className={styles.AppointmentWidget__form}>
        <div className="row form-group">
          <div className="col-sm-6 col-md-6">
            <input
              value={this.state.dateValue}
              className="form-control"
              ref="date"
              type="date"
              onChange={this.handleDateChange}
            />
          </div>
          <div className="col-sm-6 col-md-6">
            <input
              value={this.state.hourValue}
              className="form-control"
              ref="time"
              type="time"
              onChange={this.handleTimeChange}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-12 col-md-12">
            <textarea
              placeholder={this.props.intl.messages.appointmentReason}
              value={this.state.reasonValue}
              className="form-control"
              rows={TEXTAREA_ROWS}
              ref="reason"
              onChange={this.handleReasonChange}
            />
          </div>
        </div>
        {!isAnonymousUser ? (
          <div
            className={`col-sm-12 col-md-12 ${
              styles.AppointmentWidget__submit
            }`}
          >
            <a
              className="btn btn-default"
              href="#"
              onClick={this.manageAppointment}
            >
              <FormattedMessage id="submit" />
            </a>
          </div>
        ) : null}
        {isAnonymousUser ? (
          <PatientWidget
            showPatientWidget
            managePatient={this.handlePatientWidgetSubmit}
            isAppointmentPage
          />
        ) : null}
      </div>
    );
    const componentContent = this.state.submittedAppointment ? (
      <FormattedMessage id="submittedAppointmentMsg" />
    ) : (
      appointmentForm
    );

    return (
      <div className={styles.AppointmentWidget}>
        <div className="container">
          <h2 className={styles.AppointmentWidget__title}>
            <FormattedMessage id="appointmentLabel" />
          </h2>
          <div className={styles.AppointmentWidget__description}>
            <FormattedMessage id="appointmentDescription" />
          </div>
          <div className={styles.AppointmentWidget__content}>
            {componentContent}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgetValues: state.appointmentsWidget.defaultValues,
  patients: state.patients.data,
  intl: state.intl,
});

AppointmentWidget.propTypes = {
  dispatch: PropTypes.func.isRequired,
  widgetValues: PropTypes.object,
  patients: PropTypes.array,
  intl: PropTypes.object,
};

export default connect(mapStateToProps)(AppointmentWidget);
