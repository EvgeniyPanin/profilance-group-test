import React from "react";
import NewPostForm from "../Forms/NewPostForm/NewPostForm";
import style from "./NewPost.module.css";

class NewPost extends React.Component {
  render() {
    return (
      <div className={style.new_post}>
        <h2 className={style.header}>
          {this.props.isAdmin ? 'Добавить новость' : 'Предложить новость'}
          </h2>
        <NewPostForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = (formData) => {
    this.props.addPost(formData, this.props.isAdmin, this.props.currentUserId);
  };
}

export default NewPost;
