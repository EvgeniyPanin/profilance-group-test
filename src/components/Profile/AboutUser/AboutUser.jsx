import React from "react";
import style from "./AboutUser.module.css";

const AboutUser = ({ user }) => {
  console.log(user);
  return (
    <div>
      <p className={style.paragraph}>
        <b>Обо мне: </b>
        {user.aboutMe}
      </p>
      <p className={style.paragraph}>
        <b>В поиске работы: </b>
        {user.lookingForAJob ? "✅" : "❌"}
      </p>
      <p className={style.paragraph}>
        <b>Ключевые навыки: </b>
        {user.lookingForAJobDescription}
      </p>
      <b>Мои контакты: </b>
      <ul className={style.contacts}>
        {Object.keys(user.contacts).map((key) => {
          return (
            <li className={style.contacts__item} key={key}>
              <a className={`${style[key]} ${style.contacts__link}`}></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutUser;
