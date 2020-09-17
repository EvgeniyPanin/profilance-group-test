import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  acceptProfile,
  getStatus,
  setUserStatus,
  setUserAvatar
} from "../../redux/profile-reducer";
import Preloader from "../UI/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import withAutoRedirect from "../../hok/withAutoRedirect";
import { compose } from "redux";
import { selectUser, selectStatus } from "../../redux/profile-selectors";
import { selectId } from "../../redux/auth-selectors";


class ProfileContainer extends React.PureComponent {
  render = () => {
    if (!this.props.user) {
      return <Preloader />
    } else {
    return (
      <Profile
        isOwner={this.props.myID === this.props.user.userId}
        user={this.props.user}
        status={this.props.status}
        setUserStatus={this.props.setUserStatus}
        loadAvatarHandle={this.loadAvatarHandle}
      />
    )}
  };

  componentDidMount() {
    this.updateProfileSuccess();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.updateProfileSuccess();
    }
  }

  updateProfileSuccess() {
    const userID = this.props.match.params.id || this.props.myID;
    this.props.acceptProfile(userID);
    this.props.getStatus(userID);
  }

  loadAvatarHandle = (evt) => {
    console.log(evt.target.files[0])
    this.props.setUserAvatar(evt.target.files[0])
  }

}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    myID: selectId(state),
    status: selectStatus(state),
  };
};

export default compose(
  connect(mapStateToProps, { acceptProfile, getStatus, setUserStatus, setUserAvatar }),
  withAutoRedirect,
  withRouter
)(ProfileContainer);
