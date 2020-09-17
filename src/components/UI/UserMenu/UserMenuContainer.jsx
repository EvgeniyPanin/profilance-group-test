import React from "react";
import UserMenu from "./UserMenu";
import { connect } from "react-redux";
import { logout } from '../../../redux/auth-reducer'


class UserMenuContainer extends React.Component {
  render() {
    return (
      <UserMenu logoutHandler={this.logoutHandler} {...this.props}/>
    )
  }

  logoutHandler = () => {
    this.props.logout()
  }
} 


export default connect(null, {logout})(UserMenuContainer)