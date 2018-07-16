import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './ServiceWidget.css';

export class ServiceWidget extends Component {
  constructor(props) {
    super(props);

    this.manageService = this.manageService.bind(this);
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
    const cls = `${styles.ServiceWidget} ${
      this.props.showServiceWidget ? styles.ServiceWidget__hide : ''
    }`;
    return (
      <div className={cls}>
        <div className="container">
          <h2 className={styles.ServiceWidget__title}>
            <FormattedMessage id={this.props.widgetValues.serviceWidgetTitle} />
          </h2>
          <div className="row form-group">
            <input
              placeholder={this.props.intl.messages.serviceTitle}
              value={this.props.widgetValues.titleInputValue}
              className="form-control"
              ref="title"
            />
          </div>
          <div className="row form-group">
            <textarea
              placeholder={this.props.intl.messages.serviceContent}
              value={this.props.widgetValues.contentTextareaValue}
              className="form-control"
              ref="content"
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
