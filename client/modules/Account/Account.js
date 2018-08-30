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
    const { email, _id } = this.props.patient;
    const account = {
      userName: email,
      password: 'TODO',
      patientID: _id,
    };
    this.props.dispatch(addAccountRequest(account));
  }

  render() {
    return (
      <div className={styles.Account}>
        {this.props.account.patientID ?
          ( 
            <div className={styles.Account__button} onClick={this.handleCreateClick}>
                {this.props.account.userName} / {this.props.account.password}
            </div>
          ) 
          : ( 
            <div className={styles.Account__button} onClick={this.handleCreateClick}>
                <FormattedMessage id="createAnAccount" />
            </div> 
          )}
      </div>
    )
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
