import React from 'react';

import MenuLinks from '../MenuLinks/MenuLinks';

import styles from './SidebarMenu.css';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isClosed: nextProps.isSidebarClosed,
    });
  }

  handleClose() {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  }

  render() {
    const SidebarMenuClasses = `${styles.SidebarMenu} ${
      this.state.isClosed ? styles.SidebarMenu__hide : ''}`;
    return (
      <div className={SidebarMenuClasses}>
        <div className={styles.SidebarMenu__close} onClick={this.handleClose}>&times;</div>
        <MenuLinks isPatient={this.props.isPatient} isAdmin={this.props.isAdmin} styles={styles} isSidebar />
      </div>
    );
  }
}

export default SidebarMenu;
