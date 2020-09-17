const ADD_POST = "PROFILE/ADD-POST";
const SET_PROFILE = "PROFILE/SET_PROFILE";
const SET_STATUS = "PROFILE/SET_STATUS";
const SET_USER_AVATAR_SUCCESS = "PROFILE/SET_USER_AVATAR_SUCCESS";

const createNewPost = (text) => {
  const newPost = {
    contant: text,
    avatar: null,
  };
  return newPost;
};

const initialState = {
  posts: [
    {
      contant: "Из за недостаточного функционала сервера, эти посты пока что хардкод",
      avatar: null,
    },
    {
      contant: "Hello? How are you?",
      avatar: null,
    },
    {
      contant: "Today is June 10th, perfect day to lern the React, Redux",
      avatar: null,
    },
  ],
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = createNewPost(action.newPostText);
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_AVATAR_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    default:
      return state;
  }
};

export function addPost(newPostText) {
  return { type: ADD_POST, newPostText };
}

export function setProfile(profile) {
  return { type: SET_PROFILE, profile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export function setUserAvatarSuccess(photos) {
  return { type: SET_USER_AVATAR_SUCCESS, photos };
}

export const acceptProfile = (path) => {
  /* return async (dispatch) => {

    const res = await profileAPI.getProfile(path);

    dispatch(setProfile(res.data));
  }; */
};

export const getStatus = (userID) => {
  /* return async (dispatch) => {

    const res = await profileAPI.getStatus(userID);

    let status = res.data;
    if (status === null || status === "") {
      status = "Нажмите, чтобы установить статус";
    }
    dispatch(setStatus(status));
  }; */
};

export const setUserStatus = (status) => {
  /* return async (dispatch) => {

    const res = await profileAPI.setStatus(status);

    const isHasStatus = (res.resultCode === 0);
    if (isHasStatus) {
      dispatch(setStatus(status));
    }
  }; */
};

export const setUserAvatar = (fileAvatar) => {
  /* return async (dispatch) => {

    const res = await profileAPI.setAvatar(fileAvatar);
    const isOk = (res.resultCode === 0);
    if (isOk) {
      dispatch(setUserAvatarSuccess(res.data.photos));
    } else {
      alert(`Произошла ошибка при обновлении аватара`)
    }
  }; */
};

export default profileReducer;
