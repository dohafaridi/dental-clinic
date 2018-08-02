import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import MedicalTreatmentList from '../../components/MedicalTreatmentList';
import MedicalTreatmentWidget from '../../components/MedicalTreatmentWidget/MedicalTreatmentWidget';
import {
  addMedicalTreatmentRequest,
  fetchMedicalTreatments,
  editMedicalTreatmentRequest,
  deleteMedicalTreatmentRequest,
} from '../../MedicalTreatmentActions';
import { toggleShowMedicalTreatmentWidget } from '../../../App/AppActions';
import { setDefaultMedicalTreatmentWidgetValues } from '../../components/MedicalTreatmentWidget/MedicalTreatmentWidgetActions';

class MedicalTreatmentListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicalTreatments());

    this.handleMedicalTreatmentWidgetSubmit = this.handleMedicalTreatmentWidgetSubmit.bind(this);
    this.toggleShowMedicalTreatmentWidgetSection = this.toggleShowMedicalTreatmentWidgetSection.bind(this);
    this.handleAddMedicalTreatment = this.handleAddMedicalTreatment.bind(this);
    this.handleDeleteMedicalTreatment = this.handleDeleteMedicalTreatment.bind(this);
    this.handleEditMedicalTreatment = this.handleEditMedicalTreatment.bind(this);
  }

  handleMedicalTreatmentWidgetSubmit(title, content) {
    this.props.widgetValues.medicalTreatmentWidgetTitleIntId === 'editTheMedicalTreatment' // eslint-disable-line
      ? this.handleEditMedicalTreatment(title, content, this.props.widgetValues.cuid)
      : this.handleAddMedicalTreatment(title, content);
  }

  handleAddMedicalTreatment(title, content) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(addMedicalTreatmentRequest({ title, content }));
  }

  handleEditMedicalTreatment(title, content, cuid) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(editMedicalTreatmentRequest(title, content, cuid));
  }

  toggleShowMedicalTreatmentWidgetSection(medicalTreatment) {
    this.props.dispatch(toggleShowMedicalTreatmentWidget());
    this.props.dispatch(
      setDefaultMedicalTreatmentWidgetValues({
        medicalTreatmentWidgetTitleIntId: 'editTheMedicalTreatment',
        titleInputValue: medicalTreatment.title,
        contentTextareaValue: medicalTreatment.content,
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
    const componentContent = (
      <div className="MedicalTreatmentListPage">
        <MedicalTreatmentWidget
          manageMedicalTreatment={this.handleMedicalTreatmentWidgetSubmit}
          showMedicalTreatmentWidget={this.props.showMedicalTreatmentWidget}
        />
        <MedicalTreatmentList
          handleDeleteMedicalTreatment={this.handleDeleteMedicalTreatment}
          handleEditMedicalTreatment={this.toggleShowMedicalTreatmentWidgetSection}
          medicalTreatments={this.props.medicalTreatments}
        />
      </div>
    );
    const emptyCollectionMessage = (
      <FormattedMessage
        id="emptyCollectionMessage"
        values={{ collection: 'medicalTreatments' }}
      />
    );

    return this.props.medicalTreatments.length || this.props.showMedicalTreatmentWidget
      ? componentContent
      : emptyCollectionMessage;
  }
}

// Actions required to provide data for MedicalTreatmentListPage to render in sever side.
MedicalTreatmentListPage.need = [
  () => {
    return fetchMedicalTreatments();
  },
];

const mapStateToProps = state => ({
  widgetValues: state.medicalTreatmentsWidget.defaultValues,
  showMedicalTreatmentWidget: state.app.showMedicalTreatmentWidget,
  medicalTreatments: state.medicalTreatments.data,
});

MedicalTreatmentListPage.propTypes = {
  medicalTreatments: PropTypes.array,
  showMedicalTreatmentWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MedicalTreatmentListPage);
