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
  const { username, password, submit, logout } = intl.messages;
  const loginDropdownClasses = `${styles.LoginDropdown__dropdown} ${
    !isOpen && !userStatus.usernameId ? styles['LoginDropdown__dropdown--hide'] : ''
    }`;

  return (
    <div className={styles.LoginDropdown}>
      <div className={styles.LoginDropdown__icon} onClick={handleToggleDropdown}>
        <i className="fas fa-user" />
      </div>
      <div className={loginDropdownClasses}>
        {!userStatus.usernameId ? (
          <form noValidate onSubmit={handleSubmit} method="post">
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
        ) : (
          <div className={styles.LoginDropdown__logout} onClick={handleLogout}>{logout}</div>
        )}
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
