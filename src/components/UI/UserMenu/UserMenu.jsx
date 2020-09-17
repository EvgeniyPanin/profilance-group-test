import React from "react";
import style from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";


const UserMenu = (props) => {
  return (
    <div className={style.container}>
        <button 
            className={`btn ${style.button}`}
            onClick={props.logoutHandler}
            >
            Выйти
        </button>
        <NavLink className={style.link} to="/profile">{props.userLogin}</NavLink>
    </div>
  );
};

export default UserMenu;