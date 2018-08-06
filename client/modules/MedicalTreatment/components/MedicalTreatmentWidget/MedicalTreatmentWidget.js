import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './MedicalTreatmentWidget.css';

const TEXTAREA_ROWS = '20';

export class MedicalTreatmentWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: this.props.widgetValues.titleInputValue || '',
      contentValue: this.props.widgetValues.contentTextareaValue || '',
      costValue: this.props.widgetValues.costInputValue || '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.manageMedicalTreatment = this.manageMedicalTreatment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ titleValue: nextProps.widgetValues.titleInputValue });
    this.setState({ contentValue: nextProps.widgetValues.contentTextareaValue });
    this.setState({ costValue: nextProps.widgetValues.costInputValue });
  }

  handleTitleChange(event) {
    this.setState({ titleValue: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ contentValue: event.target.value });
  }

  handleCostChange(event) {
    this.setState({ costValue: event.target.value });
  }

  /**
   * manageMedicalTreatment could be used as helper in the process of adding or
   * editing a medicalTreatment, on both operation title and content are mandatory.
   */
  manageMedicalTreatment() {
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    const costRef = this.refs.cost;
    const patientID = this.props.patientID;

    if (titleRef.value && contentRef.value && costRef.value && patientID) {
      this.props.manageMedicalTreatment(titleRef.value, contentRef.value, costRef.value, patientID);
      titleRef.value = contentRef.value = costRef.value = '';
    }
  }

  render() {
    if (!this.props.widgetValues) {
      return null;
    }

    const cls = `${styles.MedicalTreatmentWidget} ${
      this.props.showMedicalTreatmentWidget ? styles.MedicalTreatmentWidget__hide : ''
    }`;
    const widgetTitleComponent = this.props.widgetValues
      .medicalTreatmentWidgetTitleIntId ? (
      <FormattedMessage id={this.props.widgetValues.medicalTreatmentWidgetTitleIntId} />
    ) : null;

    return (
      <div className={cls}>
        <div className="container">
          <h2 className={styles.MedicalTreatmentWidget__title}>
            {widgetTitleComponent}
          </h2>
          <div className="row form-group">
            <input
              placeholder={this.props.intl.messages.medicalTreatmentTitle}
              value={this.state.titleValue}
              className="form-control"
              ref="title"
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="row form-group">
            <textarea
              placeholder={this.props.intl.messages.medicalTreatmentContent}
              value={this.state.contentValue}
              className="form-control"
              rows={TEXTAREA_ROWS}
              ref="content"
              onChange={this.handleContentChange}
            />
          </div>
          <div className="row form-group">
            <input
              placeholder={this.props.intl.messages.medicalTreatmentCost}
              value={this.state.costValue}
              className="form-control"
              ref="cost"
              onChange={this.handleCostChange}
            />
          </div>
          <div
            className={`col-sm-12 col-md-12 ${styles.MedicalTreatmentWidget__submit}`}
          >
            <a
              className="btn btn-default"
              href="#"
              onClick={this.manageMedicalTreatment}
            >
              <FormattedMessage id="submit" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgetValues: state.medicalTreatmentsWidget.defaultValues,
  intl: state.intl,
});

MedicalTreatmentWidget.propTypes = {
  manageMedicalTreatment: PropTypes.func.isRequired,
  showMedicalTreatmentWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  patientID: PropTypes.string,
  intl: PropTypes.object,
};

export default connect(mapStateToProps)(MedicalTreatmentWidget);
