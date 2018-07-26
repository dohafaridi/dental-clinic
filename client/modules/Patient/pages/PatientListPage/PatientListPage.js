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
    this.toggleShowPatientWidgetSection = this.toggleShowPatientWidgetSection.bind(this);
    this.handleAddPatient = this.handleAddPatient.bind(this);
    this.handleDeletePatient = this.handleDeletePatient.bind(this);
    this.handleEditPatient = this.handleEditPatient.bind(this);
  }

  handlePatientWidgetSubmit(title, content) {
    this.props.widgetValues.patientWidgetTitleIntId === 'editThePatient' // eslint-disable-line
      ? this.handleEditPatient(title, content, this.props.widgetValues.cuid)
      : this.handleAddPatient(title, content);
  }

  handleAddPatient(title, content) {
    this.props.dispatch(toggleShowPatientWidget());
    this.props.dispatch(addPatientRequest({ title, content }));
  }

  handleEditPatient(title, content, cuid) {
    this.props.dispatch(toggleShowPatientWidget());
    this.props.dispatch(editPatientRequest(title, content, cuid));
  }

  toggleShowPatientWidgetSection(patient) {
    this.props.dispatch(toggleShowPatientWidget());
    this.props.dispatch(
      setDefaultPatientWidgetValues({
        patientWidgetTitleIntId: 'editThePatient',
        titleInputValue: patient.title,
        contentTextareaValue: patient.content,
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
