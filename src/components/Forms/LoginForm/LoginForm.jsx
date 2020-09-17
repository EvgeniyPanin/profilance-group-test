import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Fields/Field';
import { required } from '../../../utils/validators/required';
import { maxLengthCreator } from '../../../utils/validators/maxLengthCreator';

const maxLength25 = maxLengthCreator(25);
const LoginForm = (props) => {
    return (
      <form className={style.login_form} onSubmit={props.handleSubmit}>
        <span className={style.submit_error}>{ props.error }</span>
        <div className="form-group">
          <Field type="text" 
                className="form-control" 
                placeholder='login' 
                name='login'
                component={Input}
                validate={[required, maxLength25]}
          />
        </div>
        <div className="form-group">
          <Field className="form-control" 
                placeholder='password' 
                name='password' 
                component={Input}
                validate={[required, maxLength25]}
                type='password'
          />
        </div>
        <button type="submit" className={`btn btn-primary ${style.button_login}`}>Войти</button>
      </form>
    );
}

export default reduxForm({form: 'login'})(LoginForm);