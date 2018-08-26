import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { addAccountRequest } from './AccountActions';
import styles from './Account.css';

class Account extends Component {
  constructor(props) {
    super(props);

    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCreateClick() {
    const { email, patientID } = this.props.patient;
    const account = {
      userName: email,
      password: 'TODO',
      patientID,
    };
    this.props.dispatch(addAccountRequest(account));
  }

  render() {
    const createAnAccount = (
      <div className={styles.Account__button} onClick={this.handleCreateClick}>
          <FormattedMessage id="createAnAccount" />
      </div>
    );
    const toggleActivateAnAccount = (
      <div className={styles.Account__button} onClick={this.handleCreateClick}>
          {this.props.account.userName} / {this.props.account.password}
      </div>
    );
    return (
      <div className={styles.Account}>
        {this.props.account.loggedInPatientID ? toggleActivateAnAccount :  createAnAccount}
      </div>
    )
  }
}

const mapStateToProps = ({ account }) => ({
  account: account.data,
});

Account.propTypes = {
  patient: PropTypes.object,
  account: PropTypes.array,
};

export default connect(mapStateToProps)(Account);
