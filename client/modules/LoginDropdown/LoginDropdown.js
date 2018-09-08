import React, { PropTypes } from 'react';

import styles from './LoginDropdown.css';

const loginDropdown = ({
  isOpen,
  userStatus,
  userNameInputValue,
  passwordInputValue,
  handleToggleDropdown,
  handleUserNameChange,
  handlePasswordChange,
  handleSubmit,
  handleLogout,
  intl,
}) => {
  const isLoggedIn = userStatus.usernameId;
  const { username, password, submit, logout, welcome, accessYourAccount } = intl.messages;
  const loginDropdownClasses = `${styles.LoginDropdown} ${
      !isOpen && !userStatus.usernameId ? styles.LoginDropdown__hide : ''
    } ${!isLoggedIn ? styles.LoginDropdown__loggedOut : ''}`;

  return (
    <div className={loginDropdownClasses}>
      <div className={styles.LoginDropdown__icon} onClick={handleToggleDropdown}>
        <i className="fas fa-user" />
        {isLoggedIn ? (
          <div className={styles.LoginDropdown__logout} onClick={handleLogout}>
            {welcome} {userStatus.userName} | <span>{logout}</span>
          </div>
        ) : null}
      </div>
      <div className={styles.LoginDropdown__form}>
        {!isLoggedIn ? (
          <form noValidate onSubmit={handleSubmit} method="post">
            <span>{accessYourAccount}</span>
            <input
              placeholder={username}
              value={userNameInputValue}
              className="form-control"
              onChange={handleUserNameChange}
            />
            <input
              placeholder={password}
              value={passwordInputValue}
              className="form-control"
              type="password"
              onChange={handlePasswordChange}
            />
            <input type="submit" value={submit} onClick={handleSubmit} />
          </form>
        ) : null}
      </div>
    </div>
  );
};

loginDropdown.propTypes = {
  isOpen: PropTypes.bool,
  userStatus: PropTypes.object,
  userNameInputValue: PropTypes.string,
  passwordInputValue: PropTypes.string,
  handleToggleDropdown: PropTypes.func,
  handleUserNameChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleLogout: PropTypes.func,
  intl: PropTypes.object,
};

export default loginDropdown;
