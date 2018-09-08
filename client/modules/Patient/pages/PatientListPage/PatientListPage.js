import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import PatientList from '../../components/PatientList';
import PatientWidget from '../../components/PatientWidget/PatientWidget';
import {
  addPatientRequest,
  fetchPatients,
  editPatientRequest,
  deletePatientRequest,
} from '../../PatientActions';
import { toggleShowPatientWidget } from '../../../App/AppActions';
import { setDefaultPatientWidgetValues } from '../../components/PatientWidget/PatientWidgetActions';

class PatientListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPatients());

    this.handlePatientWidgetSubmit = this.handlePatientWidgetSubmit.bind(this);
    this.toggleShowPatientWidgetSection = this.toggleShowPatientWidgetSection.bind(
      this
    );
    this.handleAddPatient = this.handleAddPatient.bind(this);
    this.handleDeletePatient = this.handleDeletePatient.bind(this);
    this.handleEditPatient = this.handleEditPatient.bind(this);
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
    this.props.widgetValues.patientWidgetTitleIntId === "editThePatient" // eslint-disable-line
      ? this.handleEditPatient(
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
          this.props.widgetValues.cuid
        )
      : this.handleAddPatient(
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
        );
  }

  handleAddPatient(
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
    this.props.dispatch(toggleShowPatientWidget());
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

  handleEditPatient(
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
    cuid
  ) {
    this.props.dispatch(toggleShowPatientWidget());
    this.props.dispatch(
      editPatientRequest(
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
        cuid
      )
    );
  }

  toggleShowPatientWidgetSection(patient) {
    this.props.dispatch(toggleShowPatientWidget());
    this.props.dispatch(
      setDefaultPatientWidgetValues({
        patientWidgetTitleIntId: 'editThePatient',
        firstNameInputValue: patient.firstName,
        lastNameInputValue: patient.lastName,
        sexInputValue: patient.sex,
        birthDayInputValue: patient.birthDay,
        phoneInputValue: patient.phone,
        emailInputValue: patient.email,
        addressInputValue: patient.address,
        cityInputValue: patient.city,
        maritalStatusInputValue: patient.maritalStatus,
        companyInputValue: patient.company,
        doctorInputValue: patient.doctor,
        insuranceInputValue: patient.insurance,
        cuid: patient.cuid,
      })
    );
  }

  handleDeletePatient(cuid) {
    if (confirm('Do you want to delete this patient')) { // eslint-disable-line
      this.props.dispatch(deletePatientRequest(cuid));
    }
  }

  render() {
    const componentContent = (
      <div className="PatientListPage">
        <PatientWidget
          managePatient={this.handlePatientWidgetSubmit}
          showPatientWidget={this.props.showPatientWidget}
        />
        <PatientList
          handleDeletePatient={this.handleDeletePatient}
          handleEditPatient={this.toggleShowPatientWidgetSection}
          patients={this.props.patients}
          isAdmin={this.props.userStatus.isAdmin}
        />
      </div>
    );
    const emptyCollectionMessage = (
      <FormattedMessage
        id="emptyCollectionMessage"
        values={{ collection: 'patients' }}
      />
    );

    return this.props.patients.length || this.props.showPatientWidget
      ? componentContent
      : emptyCollectionMessage;
  }
}

// Actions required to provide data for PatientListPage to render in sever side.
PatientListPage.need = [
  () => {
    return fetchPatients();
  },
];

const mapStateToProps = state => ({
  widgetValues: state.patientsWidget.defaultValues,
  showPatientWidget: state.app.showPatientWidget,
  patients: state.patients.data,
});

PatientListPage.propTypes = {
  patients: PropTypes.array,
  showPatientWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PatientListPage);
