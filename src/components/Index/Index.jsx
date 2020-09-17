import React from 'react';
import style from './Index.module.css';


const Index = (props) => {
    return (
    <h2 className={style.header}>Привет, {props.login || 'Гость'}</h2>
    )
}

export default Index;