import { stopSubmit } from "redux-form";

const SET_AUTHORIZATION = "AUTH/SET_AUTHORIZATION";
const RESET_AUTH_DATA = "AUTH/RESET_AUTH_DATA";

const initialState = {
  currentUser: {
    id: 1,
    login: 'admin',
    credentials: 'admin',
  },
  users: [
    { login: "admin", password: "admin", id: 1, credentials: "admin" },
    { login: "user", password: "user", id: 2, credentials: "user" }
  ],
  isAuth: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION:
      for (let i=0; i < state.users.length; i++) {
        const user = state.users[i]
        if (user.login === action.payload.login && user.password === action.payload.password) {
          return {
            ...state,
            currentUser: {
              id: user.id,
              login: user.login,
              credentials: user.credentials,
            },
            isAuth: true,
          }
        }
      }
    case RESET_AUTH_DATA:
      return {
        ...state,
        currentUser: {
          id: null,
          login: null,
          credentials: null
        },
        isAuth: false
      }
    default:
      return state;
  }
};

const setAuthorization = (payload) => {
  return { type: SET_AUTHORIZATION, payload};
};

const resetAuthData = () => {
  return { type: RESET_AUTH_DATA};
};

export const getMe = () => {
  /* return async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === 0) {
      const { email, id, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  }; */
};

export const login = (payload) => {
  return (dispatch, getState) => {
    const data = dispatch(setAuthorization(payload));

    if (!getState().auth.isAuth) {
      dispatch(stopSubmit("login", { _error: 'Ошибка авторизации, логин или пароль введен некорректно' }));
    }
   /*  if (isAuthorized) {
      dispatch(getMe());
    } else {
      const error =
        data.messages.length === 0
          ? "Failed authorized, some error"
          : data.messages[0];
      dispatch(stopSubmit("login", { _error: error }));
    } */
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(resetAuthData())
  };
};

export default authReducer;
