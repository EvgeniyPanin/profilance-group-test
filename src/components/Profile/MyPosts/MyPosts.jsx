import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";



const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post => <Post contant={ post.contant }  avatar={ props.userAvatar }/>);
    return (
        <div>
            <NewPost
                addPost={props.addPost}/>
            { postsElements }
        </div>
    )
}

export default MyPosts;