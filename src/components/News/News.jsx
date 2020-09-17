import React from 'react';
import NewPost from '../MyPosts/NewPost/NewPost';
import style from './News.module.css';


const News = ({isAdmin, isAuth, news, currentUserId, createNewsList}) => {
    return (
        <div>
            {isAuth && <NewPost  isAdmin={isAdmin}/>}
            {createNewsList(news, isAdmin, currentUserId)}
        </div>
    )
}

export default News;