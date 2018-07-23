import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './ServiceWidget.css';

const TEXTAREA_ROWS = '20';

export class ServiceWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: this.props.widgetValues.titleInputValue || '',
      contentValue: this.props.widgetValues.contentTextareaValue || '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.manageService = this.manageService.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ titleValue: nextProps.widgetValues.titleInputValue });
    this.setState({
      contentValue: nextProps.widgetValues.contentTextareaValue,
    });
  }

  handleTitleChange(event) {
    this.setState({ titleValue: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ contentValue: event.target.value });
  }

  /**
   * manageService could be used as helper in the process of adding or
   * editing a service, on both operation title and content are mandatory.
   */
  manageService() {
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (titleRef.value && contentRef.value) {
      this.props.manageService(titleRef.value, contentRef.value);
      titleRef.value = contentRef.value = '';
    }
  }

  render() {
    if (!this.props.widgetValues) {
      return null;
    }

    const cls = `${styles.ServiceWidget} ${
      this.props.showServiceWidget ? styles.ServiceWidget__hide : ''
    }`;
    const widgetTitleComponent = this.props.widgetValues
      .serviceWidgetTitleIntId ? (
      <FormattedMessage id={this.props.widgetValues.serviceWidgetTitleIntId} />
    ) : null;

    return (
      <div className={cls}>
        <div className="container">
          <h2 className={styles.ServiceWidget__title}>
            {widgetTitleComponent}
          </h2>
          <div className="row form-group">
            <input
              placeholder={this.props.intl.messages.serviceTitle}
              value={this.state.titleValue}
              className="form-control"
              ref="title"
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="row form-group">
            <textarea
              placeholder={this.props.intl.messages.serviceContent}
              value={this.state.contentValue}
              className="form-control"
              rows={TEXTAREA_ROWS}
              ref="content"
              onChange={this.handleContentChange}
            />
          </div>
          <div
            className={`col-sm-12 col-md-12 ${styles.ServiceWidget__submit}`}
          >
            <a
              className="btn btn-default"
              href="#"
              onClick={this.manageService}
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
  widgetValues: state.servicesWidget.defaultValues,
  intl: state.intl,
});

ServiceWidget.propTypes = {
  manageService: PropTypes.func.isRequired,
  showServiceWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  intl: PropTypes.object,
};

export default connect(mapStateToProps)(ServiceWidget);
