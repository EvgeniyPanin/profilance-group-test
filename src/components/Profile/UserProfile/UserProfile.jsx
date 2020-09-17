import React from "react";
import style from "./UserProfile.module.css";
import defaultAvatar from '../../../assets/images/user.png'
import UserStatus from './UserStatus/UserStatus';
import UploadFile from "../../UI/UploadFile/UploadFile";
import AboutUser from "../AboutUser/AboutUser";

const UserProfile = ({isOwner, user, ...props}) => {
  const avatar = user.photos.large ? user.photos.large : defaultAvatar;

  return (
    <div className={style.container}>
      <div className={style.avatar_container}>
        <span className={style.image_container}>
          <img className={style.avatar} src={ avatar } />
        </span>
        {isOwner && <UploadFile fileLoader={props.loadAvatarHandle} />}
      </div>
      <div className={style.description_container}>
        <h3 className={style.user_name}>{user.fullName}</h3>
        {isOwner
          ? <UserStatus status={props.status} setUserStatus={props.setUserStatus}/>
          : <p className={style.status}>{ user.aboutMe }</p>}
          <AboutUser user={user} />
      </div>
    </div>
  );
};

export default UserProfile;
