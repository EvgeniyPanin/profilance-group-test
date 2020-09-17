import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";


const Profile = ({user, status, setUserStatus, myID, loadAvatarHandle, isOwner}) => {
    return (
      <div className={style.profile}>
        {isOwner && <Illustration />}
        <UserProfile
          isOwner={isOwner}
          user={user}
          status={status}
          setUserStatus={setUserStatus}
          loadAvatarHandle={loadAvatarHandle}
        />
        {isOwner && <MyPostsContainer />}
      </div>
    );
}

export default React.memo(Profile);