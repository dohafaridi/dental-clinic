import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { addAccountRequest, editAccountRequest, fetchAccountsByPatientID } from './AccountActions';
import styles from './Account.css';

class Account extends Component {
  constructor(props) {
    super(props);

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleAccountStatus = this.handleAccountStatus.bind(this);
  }

  componentDidMount() {
    const { _id } = this.props.patient;
    this.props.dispatch(fetchAccountsByPatientID(_id));
  }

  handleCreateClick() {
    const { email, _id } = this.props.patient;
    const account = {
      userName: email,
      password: 'TODO',
      patientID: _id,
    };
    this.props.dispatch(addAccountRequest(account));
  }

  handleAccountStatus() {
    this.props.dispatch(editAccountRequest(!this.props.account.isActiveAccount, this.props.account._id));
  }

  render() {
    return (
      <div className={styles.Account}>
        {this.props.account.patientID === this.props.patient._id ?
          (
            <div className={styles.Account__button} onClick={this.handleCreateClick}>
              <div className={styles.Account__status}>
                <div>
                  {this.props.account.userName} / {this.props.account.password}
                </div>
                <div className={styles.Account__status_block} onClick={this.handleAccountStatus}>
                  {this.props.account.isActiveAccount ? 'Bloquer le compte' : 'Débloquer le compte'}
                </div>
              </div>
            </div>
          )
          : (
            <div className={styles.Account__button} onClick={this.handleCreateClick}>
              <FormattedMessage id="createAnAccount" />
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  account: account.data,
});

Account.propTypes = {
  patient: PropTypes.object,
  account: PropTypes.object,
};

export default connect(mapStateToProps)(Account);
