import React from "react";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { compose } from "redux";
import LoginContainer from './components/Login/LoginContainer';



class App extends React.Component {
  render() {
    return (
      <div className="main">
        <HeaderContainer />
        {/* <Navbar /> */}
        <div>
          {/* <Route path='/profile/:id?' render={() => <ProfileContainer/>} /> */}
          {/* <Route path='/users' render={() => <UsersContainer />} /> */}
          {/* <Route path='/dialogs' render={withSuspense(DialogsContainer)} /> */}
          {/* <Route path='/news' render={() => <News />} /> */}
          {/* <Route path='/music' render={() => <Music />} /> */}
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    )
  }
}

export default compose(
  withRouter,
)(App);
