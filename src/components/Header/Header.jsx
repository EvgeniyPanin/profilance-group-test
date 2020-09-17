import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import UserMenuContainer from "../UI/UserMenu/UserMenuContainer";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  return (
    <header className={style.header}>
      <span
        className={style.logo}
      >
        Profilance-froup
      </span>
      <Navbar />
      <div className={style.auth}>
        {props.isAuth ? (
          <UserMenuContainer userLogin={props.login}></UserMenuContainer>
        ) : (
          <NavLink to="/login" className={style.login}>
            Вход
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
