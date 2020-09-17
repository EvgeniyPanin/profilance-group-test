import React from "react";
import style from "./NewPost.module.css";
import NewPostForm from "../../../Forms/NewPostForm/NewPostForm";

class NewPost extends React.Component {
  render() {
    return (
      <div className={style.new_post}>
        <h2 className={style.header}>Мои посты</h2>
        <NewPostForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = (formData) => {
    this.props.addPost(formData.NewPostText);
  };
}

export default NewPost;
