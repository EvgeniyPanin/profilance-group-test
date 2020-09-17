import React from "react";
import NewPost from "../NewPost/NewPost";
import style from "./News.module.css";

const News = ({
  isAdmin,
  isAuth,
  news,
  currentUserId,
  createNewsList,
  addPost,
  searchValue,
  setSearchValue
}) => {
  return (
    <div>
      {isAuth && (
        <NewPost
          isAdmin={isAdmin}
          currentUserId={currentUserId}
          addPost={addPost}
        />
      )}
      <div className={style.input_container}>
        <input
          onChange={(evt) => {setSearchValue(evt.target.value)}}
          value={searchValue}
          className={style.input}
          placeholder="Введите здесь значение для поиска по заголовкам и текстам новостей"
        />
      </div>

      {createNewsList(news, isAdmin, currentUserId)}
    </div>
  );
};

export default News;
