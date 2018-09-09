import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PatientWidget.css';

const getISODate = date => (date ? new Date(date).toISOString().slice(0, 10) : null);

export class PatientWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: this.props.widgetValues.firstNameInputValue || '',
      lastNameValue: this.props.widgetValues.lastNameInputValue || '',
      sexValue: this.props.widgetValues.sexInputValue || '',
      birthValue: this.props.widgetValues.birthDayInputValue || '',
      phoneValue: this.props.widgetValues.phoneInputValue || '',
      emailValue: this.props.widgetValues.emailInputValue || '',
      addressValue: this.props.widgetValues.addressInputValue || '',
      cityValue: this.props.widgetValues.cityInputValue || '',
      maritalStatusValue: this.props.widgetValues.maritalStatusInputValue || '',
      companyValue: this.props.widgetValues.companyInputValue || '',
      doctorValue: this.props.widgetValues.doctorInputValue || '',
      insuranceValue: this.props.widgetValues.insuranceInputValue || '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.handleBirthDayChange = this.handleBirthDayChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMritalStatusChange = this.handleMritalStatusChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleDoctorChange = this.handleDoctorChange.bind(this);
    this.handleInsuranceChange = this.handleInsuranceChange.bind(this);
    this.managePatient = this.managePatient.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstNameValue: nextProps.widgetValues.firstNameInputValue,
      lastNameValue: nextProps.widgetValues.lastNameInputValue,
      sexValue: nextProps.widgetValues.sexInputValue,
      birthValue: nextProps.widgetValues.birthDayInputValue,
      phoneValue: nextProps.widgetValues.phoneInputValue,
      emailValue: nextProps.widgetValues.emailInputValue,
      addressValue: nextProps.widgetValues.addressInputValue,
      cityValue: nextProps.widgetValues.cityInputValue,
      maritalStatusValue: nextProps.widgetValues.maritalStatusInputValue,
      companyValue: nextProps.widgetValues.companyInputValue,
      doctorValue: nextProps.widgetValues.doctorInputValue,
      insuranceValue: nextProps.widgetValues.insuranceInputValue,
    });
  }

  handleFirstNameChange(event) {
    this.setState({ firstNameValue: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastNameValue: event.target.value });
  }

  handleSexChange(event) {
    this.setState({ sexValue: event.target.value });
  }

  handleBirthDayChange(event) {
    this.setState({ birthValue: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phoneValue: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ emailValue: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ addressValue: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ cityValue: event.target.value });
  }

  handleMritalStatusChange(event) {
    this.setState({ maritalStatusValue: event.target.value });
  }

  handleCompanyChange(event) {
    this.setState({ companyValue: event.target.value });
  }

  handleDoctorChange(event) {
    this.setState({ doctorValue: event.target.value });
  }

  handleInsuranceChange(event) {
    this.setState({ insuranceValue: event.target.value });
  }

  /**
   * managePatient could be used as helper in the process of adding or
   * editing a patient, on both operation title and content are mandatory.
   */
  managePatient() {
    const firstNameRef = this.refs.firstName;
    const lastNameRef = this.refs.lastName;
    const sexRef = this.refs.sex;
    const birthDayRef = this.refs.birthDay;
    const phoneRef = this.refs.phone;
    const emailRef = this.refs.email;
    const addressRef = this.refs.address;
    const cityRef = this.refs.city;
    const maritalStatusRef = this.refs.maritalStatus;
    const companyRef = this.refs.company;
    const doctorRef = this.refs.doctor;
    const insuranceRef = this.refs.insurance;

    if (
      firstNameRef.value &&
      lastNameRef.value &&
      sexRef.value &&
      birthDayRef.value &&
      phoneRef.value &&
      emailRef.value &&
      addressRef.value &&
      cityRef.value &&
      maritalStatusRef.value &&
      companyRef.value &&
      doctorRef.value &&
      insuranceRef.value
    ) {
      this.props.managePatient(
        firstNameRef.value,
        lastNameRef.value,
        sexRef.value,
        birthDayRef.value,
        phoneRef.value,
        emailRef.value,
        addressRef.value,
        cityRef.value,
        maritalStatusRef.value,
        companyRef.value,
        doctorRef.value,
        insuranceRef.value
      );

      firstNameRef.value = '';
      lastNameRef.value = '';
      sexRef.value = '';
      birthDayRef.value = '';
      phoneRef.value = '';
      addressRef.value = '';
      cityRef.value = '';
      maritalStatusRef.value = '';
      companyRef.value = '';
      doctorRef.value = '';
      insuranceRef.value = '';
    }
  }

  render() {
    if (!this.props.widgetValues) {
      return null;
    }

    const cls = `${styles.PatientWidget} ${
      this.props.showPatientWidget ? styles.PatientWidget__hide : ''
    }`;
    const widgetTitleComponent = this.props.widgetValues
      .patientWidgetTitleIntId ? (
      <FormattedMessage id={this.props.widgetValues.patientWidgetTitleIntId} />
    ) : null;

    return (
      <div className={cls}>
        {this.props.isAppointmentPage ? null : (
          <h2 className={styles.PatientWidget__title}>
            {widgetTitleComponent}
          </h2>
        )}
        <div className="row form-group">
          <div className="col-sm-6 col-md-6">
            <input
              placeholder={this.props.intl.messages.patientFirstName}
              value={this.state.firstNameValue}
              className="form-control"
              ref="firstName"
              onChange={this.handleFirstNameChange}
            />
            <input
              placeholder={this.props.intl.messages.patientLastName}
              value={this.state.lastNameValue}
              className="form-control"
              ref="lastName"
              onChange={this.handleLastNameChange}
            />
            <select
              className="form-control"
              ref="sex"
              value={this.state.sexValue}
              onChange={this.handleSexChange}
            >
              <option>You are ?</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
            <input
              placeholder={this.props.intl.messages.patientBirthDay}
              type="date"
              value={getISODate(this.state.birthValue)}
              className="form-control"
              ref="birthDay"
              onChange={this.handleBirthDayChange}
            />
            <input
              placeholder={this.props.intl.messages.patientPhone}
              type="phone"
              value={this.state.phoneValue}
              className="form-control"
              ref="phone"
              onChange={this.handlePhoneChange}
            />
            <input
              placeholder={this.props.intl.messages.patientEmail}
              type="email"
              value={this.state.emailValue}
              className="form-control"
              ref="email"
              onChange={this.handleEmailChange}
            />
            <input
              placeholder={this.props.intl.messages.patientAddress}
              value={this.state.addressValue}
              className="form-control"
              ref="address"
              onChange={this.handleAddressChange}
            />
          </div>
          <div className="col-sm-6 col-md-6">
            <input
              placeholder={this.props.intl.messages.patientCity}
              value={this.state.cityValue}
              className="form-control"
              ref="city"
              onChange={this.handleCityChange}
            />
            <input
              placeholder={this.props.intl.messages.patientMaritalStatus}
              value={this.state.maritalStatusValue}
              className="form-control"
              ref="maritalStatus"
              onChange={this.handleMritalStatusChange}
            />
            <input
              placeholder={this.props.intl.messages.patientCompany}
              value={this.state.companyValue}
              className="form-control"
              ref="company"
              onChange={this.handleCompanyChange}
            />
            <select
              className="form-control"
              ref="doctor"
              value={this.state.doctorValue}
              onChange={this.handleDoctorChange}
            >
              <option>Choose your doctor</option>
              <option value="Dr Amghar">Dr Amghar</option>
              <option value="Dr Wassim">Dr Wassim</option>
            </select>
            <input
              placeholder={this.props.intl.messages.patientInsurance}
              value={this.state.insuranceValue}
              className="form-control"
              ref="insurance"
              onChange={this.handleInsuranceChange}
            />
          </div>
        </div>
        <div className={`col-sm-12 col-md-12 ${styles.PatientWidget__submit}`}>
          <a className="btn btn-default" href="#" onClick={this.managePatient}>
            <FormattedMessage id="submit" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgetValues: state.patientsWidget.defaultValues,
  patients: state.patients.data,
  intl: state.intl,
});

PatientWidget.propTypes = {
  managePatient: PropTypes.func.isRequired,
  showPatientWidget: PropTypes.bool.isRequired,
  isAppointmentPage: PropTypes.bool,
  widgetValues: PropTypes.object,
  intl: PropTypes.object,
};

export default connect(mapStateToProps)(PatientWidget);
