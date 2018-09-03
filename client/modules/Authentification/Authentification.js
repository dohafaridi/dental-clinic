import React, { Component, PropTypes } from 'react';

import styles from './Authentification.css';

class Authentification extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: 'todo' };
    this.handleToggleDropdwn = this.handleToggleDropdwn.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleToggleDropdwn() {
    return flase;
  }

  handleUserNameChange() {
  }

  render() {
    return (
      <div className="Authentification">
        <div className="Authentification__icon" onClick={this.handleToggleDropdwn}>
          <i className="fas fa-user"></i>
        </div>
        <div className={styles.Authentification__dropdown}>
          <input
            placeholder="UserName"
            value={this.state.userName}
            className="form-control"
            ref="userName"
            onChange={this.handleUserNameChange}
          />
        </div>
      </div>
    );
  }
}

/*Authentification.prototype = {

}*/

export default Authentification;