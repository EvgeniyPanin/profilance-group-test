import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import UserMenuContainer from "../UI/UserMenu/UserMenuContainer";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        href="social network icon"
        src="https://openclipart.org/image/2400px/svg_to_png/216095/WWW-Icon-White-on-Black.png"
      />
      <div className={style.auth}>
        {props.isAuth ? (
          <UserMenuContainer userLogin={props.login}></UserMenuContainer>
        ) : (
          <NavLink to="/login" className={style.login}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
