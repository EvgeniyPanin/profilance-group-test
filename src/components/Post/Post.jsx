import React from "react";
import style from "./Post.module.css";

const Post = ({ post, isAdmin, currentUserId, approvedNews, deleteNews }) => {
  return (
    <div className={style.post}>
      <span className={style.date}>{post.date}</span>
      <h3 className={style.title}>{post.title}</h3>
      <p className={style.content}>{post.content}</p>
      <div className={style.button_container}>
        {isAdmin && post.status === "moderation" && (
          <span
            onClick={() => {
              approvedNews(post.id);
            }}
            className={style.button}
          >
            &#9989;
          </span>
        )}
        {(isAdmin ||
          (currentUserId === post.ownerId && post.status === "moderation")) && (
          <span
            onClick={() => {
              deleteNews(post.id);
            }}
            className={style.button}
          >
            &#10060;
          </span>
        )}
      </div>
    </div>
  );
};

export default Post;
