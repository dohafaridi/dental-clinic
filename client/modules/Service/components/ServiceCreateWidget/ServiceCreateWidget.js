import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './ServiceCreateWidget.css';

export class ServiceCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.addService = this.addService.bind(this);
  }

  addService() {
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (titleRef.value && contentRef.value) {
      this.props.addService(titleRef.value, contentRef.value);
      titleRef.value = contentRef.value = '';
    }
  }

  render() {
    const cls = `${styles.ServiceCreateWidget} ${
      this.props.showAddService ? styles.ServiceCreateWidget__hide : ''
    }`;
    return (
      <div className={cls}>
        <div className="container">
          <h2 className={styles.ServiceCreateWidget__title}>
            <FormattedMessage id="createNewService" />
          </h2>
          <div className="row form-group">
            <input
              placeholder={this.props.intl.messages.serviceTitle}
              className="form-control"
              ref="title"
            />
          </div>
          <div className="row form-group">
            <textarea
              placeholder={this.props.intl.messages.serviceContent}
              className="form-control"
              ref="content"
            />
          </div>
          <div
            className={`col-sm-12 col-md-12 ${
              styles.ServiceCreateWidget__submit
            }`}
          >
            <a className="btn btn-default" href="#" onClick={this.addService}>
              <FormattedMessage id="submit" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ServiceCreateWidget.propTypes = {
  addService: PropTypes.func.isRequired,
  showAddService: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ServiceCreateWidget);
