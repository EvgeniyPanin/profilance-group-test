import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./NewPostForm.module.css";
import { required } from "../../../utils/validators/required";
import { Input } from '../Fields/Field';
import { Textarea } from '../Fields/Textarea';

const NewPostForm = (props) => {
  return (
    <form className={style.form} onSubmit={props.handleSubmit}>
      <div className={`form-group ${style.input_container}`}>
        <Field
        className="form-control"
        type="text"
        placeholder="Заполните заголовок"
        component={Input}
        name="title"
        validate={[required]}
      />
      </div>
      <div className={`form-group ${style.input_container}`}>
        <Field
        className="form-control"
        type="text"
        placeholder="Текст статьи"
        component={Textarea}
        name="content"
        validate={[required]}
      />
      </div>
      
        <button type="submit" className={`btn btn-primary ${style.button}`}>Добавить</button>
    </form>
  );
};

export default reduxForm({ form: "NewPostForm" })(NewPostForm);
