import React from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm';
import style from './Login.module.css';


const Login = ({onSubmit}) => {
    return (
      <div className={style.login__container}>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    );
}

export default Login;