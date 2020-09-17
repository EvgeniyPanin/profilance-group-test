import React from 'react';
import Index from './Index';
import { selectLogin } from '../../redux/auth-selectors';
import { connect } from 'react-redux';

class IndexContainer extends React.Component {
  render() {
        return <Index login={this.props.login}/>
    }
}

const mapStateToProps = (state) => {
  return {
    login: selectLogin(state)
  }
}

export default connect(mapStateToProps, {})(IndexContainer);