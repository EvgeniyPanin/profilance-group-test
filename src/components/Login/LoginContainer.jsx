import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login} from '../../redux/auth-reducer'
import { selectIsAuth } from '../../redux/auth-selectors';

class LoginContainer extends React.Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/index"/>
    }
    return <Login onSubmit = {this.onSubmit}/>
    }

  onSubmit = (formData) => {
    this.props.login(formData);
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: selectIsAuth(state)
  }
}

export default connect(mapStateToProps, {login})(LoginContainer);