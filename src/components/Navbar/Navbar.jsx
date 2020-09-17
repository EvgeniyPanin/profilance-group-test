import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
    return (
      <nav className={style.nav}>
        <ul className={style.links}>
          <li className={style.link}>
            <NavLink to="/index" activeClassName={style.active}>Главная</NavLink>
          </li>
          <li className={style.link}>
            <NavLink to="/news" activeClassName={style.active}>Новости</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;