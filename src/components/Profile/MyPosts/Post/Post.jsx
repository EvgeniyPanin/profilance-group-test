import React from "react";
import style from "./Post.module.css";




const Post = (props) => {
    return (
        <div className={style.post}>
            <span className={style.avatar_contaner}>
                <img className={style.avatar} src={props.avatar} alt="Аватар"/>
            </span>
    <p className={style.contant}>{ props.contant }</p>
        </div>
    )
        

}

export default Post;