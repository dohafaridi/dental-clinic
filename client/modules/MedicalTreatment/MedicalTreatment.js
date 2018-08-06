import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import MedicalTreatmentList from './components/MedicalTreatmentList';
import MedicalTreatmentWidget from './components/MedicalTreatmentWidget/MedicalTreatmentWidget';
import {
  addMedicalTreatmentRequest,
  fetchMedicalTreatments,
  editMedicalTreatmentRequest,
  deleteMedicalTreatmentRequest,
} from './MedicalTreatmentActions';
import { toggleShowMedicalTreatmentWidget } from '../App/AppActions';
import { setDefaultMedicalTreatmentWidgetValues } from './components/MedicalTreatmentWidget/MedicalTreatmentWidgetActions';

import styles from './MedicalTreatment.css';

class MedicalTreatment extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicalTreatments(this.props.patientID));

    this.handleMedicalTreatmentWidgetSubmit = this.handleMedicalTreatmentWidgetSubmit.bind(this);
    this.showEditWidget = this.showEditWidget.bind(this);
    this.showAddWidget = this.showAddWidget.bind(this);
    this.handleAddMedicalTreatment = this.handleAddMedicalTreatment.bind(this);
    this.handleDeleteMedicalTreatment = this.handleDeleteMedicalTreatment.bind(this);
    this.handleEditMedicalTreatment = this.handleEditMedicalTreatment.bind(this);
  }

  handleMedicalTreatmentWidgetSubmit(title, content, cost, patientID) {
    this.props.widgetValues.medicalTreatmentWidgetTitleIntId ===  "editTheMedicalTreatment" // eslint-disable-line
      ? this.handleEditMedicalTreatment(title, content, cost, this.props.widgetValues.cuid)
      : this.handleAddMedicalTreatment(title, content, cost, patientID);
  }

  handleAddMedicalTreatment(title, content, cost, patientID) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(addMedicalTreatmentRequest({ title, content, cost, patientID }));
  }

  handleEditMedicalTreatment(title, content, cost, cuid) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(editMedicalTreatmentRequest(title, content, cost, cuid));
  }

  showAddWidget() {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(
      setDefaultMedicalTreatmentWidgetValues({
        serviceWidgetTitleIntId: 'createNewMedicalTreatment',
        titleInputValue: '',
        contentTextareaValue: '',
        costInputValue: '',
      })
    );
  }

  showEditWidget(medicalTreatment) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(
      setDefaultMedicalTreatmentWidgetValues({
        medicalTreatmentWidgetTitleIntId: 'editTheMedicalTreatment',
        titleInputValue: medicalTreatment.title,
        contentTextareaValue: medicalTreatment.content,
        costInputValue: medicalTreatment.cost,
        cuid: medicalTreatment.cuid,
      })
    );
  }

  handleDeleteMedicalTreatment(cuid) {
    if (confirm('Do you want to delete this medicalTreatment')) { // eslint-disable-line
      this.props.dispatch(deleteMedicalTreatmentRequest(cuid));
    }
  }

  render() {
    return (
      <div className="MedicalTreatment">
        <div className={styles.MedicalTreatment__add}>
          <a href="#" onClick={this.showAddWidget}>
            <FormattedMessage id="addMedicalTreatment" />
          </a>
        </div>
        <MedicalTreatmentWidget
          manageMedicalTreatment={this.handleMedicalTreatmentWidgetSubmit}
          showMedicalTreatmentWidget={this.props.showMedicalTreatmentWidget}
          patientID={this.props.patientID}
        />
        <MedicalTreatmentList
          handleDeleteMedicalTreatment={this.handleDeleteMedicalTreatment}
          handleEditMedicalTreatment={this.showEditWidget}
          medicalTreatments={this.props.medicalTreatments}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgetValues: state.medicalTreatmentsWidget.defaultValues,
  showMedicalTreatmentWidget: state.app.showMedicalTreatmentWidget,
  medicalTreatments: state.medicalTreatments.data,
});

MedicalTreatment.propTypes = {
  medicalTreatments: PropTypes.array,
  showMedicalTreatmentWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  patientID: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MedicalTreatment);
