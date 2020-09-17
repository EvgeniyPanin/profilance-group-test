import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { compose } from "redux";
import { selectIsAuth, selectLogin } from "../../redux/auth-selectors";

class HeaderContainer extends React.Component {
  render() {
    return <Header { ...this.props }/>;
  }
  
  componentDidMount() {}
}

const mapStateToProps = (state) => {
  return {
    isAuth: selectIsAuth(state),
    login: selectLogin(state)
  };
};

export default compose(
  connect(mapStateToProps, { })
)(HeaderContainer)

