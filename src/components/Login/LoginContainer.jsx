import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login} from '../../redux/auth-reducer'
import { selectIsAuth } from '../../redux/auth-selectors';

class LoginContainer extends React.Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/profile"/>
    }
    return <Login onSubmit = {this.onSubmit}/>
    }

  onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    this.props.login(email, password, rememberMe);
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: selectIsAuth(state)
  }
}

export default connect(mapStateToProps, {login})(LoginContainer);