import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { login, logout } from './LoginDropdownActions';

import LoginDropdown from './LoginDropdown';

class LoginDropdownContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isOpen: false,
    };
    this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.setLogin();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userStatus.usernameId !== this.props.userStatus.usernameId) {
      sessionStorage.setItem('username', nextProps.userStatus.usernameId);
      sessionStorage.setItem('password', nextProps.userStatus.password);
    }
  }

  setLogin() {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
      this.props.dispatch(login(sessionStorage.getItem('username'), sessionStorage.getItem('password')));
    }
  }

  handleToggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.username, this.state.password));
  }

  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <LoginDropdown
        {...this.props}
        isOpen={this.state.isOpen}
        userNameInputValue={this.state.username}
        passwordInputValue={this.state.password}
        handleToggleDropdown={this.handleToggleDropdown}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleSubmit={this.handleSubmit}
        handleLogout={this.handleLogout}
      />
    );
  }
}

const mapStateToProps = state => ({
  intl: state.intl,
  userStatus: state.userStatus,
});

LoginDropdownContainer.propTypes = {
  intl: PropTypes.object,
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(LoginDropdownContainer);
