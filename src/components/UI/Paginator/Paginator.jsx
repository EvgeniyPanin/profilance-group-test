import React, { useState } from "react";
import style from "./Paginator.module.css";

const Paginator = (props) => {
  const { totalUsersCount, pageSize, currentPage, portionNumber, setPortionNumber, portionLength = 10 } = props;

  const length = Math.ceil(totalUsersCount / pageSize);
  let pagesList = [];
  for (let i = 1; i <= length; i++) {
    pagesList.push(i);
  }

  const leftPortionItem = (portionNumber - 1) * portionLength;
  const rightPortionItem = portionNumber * portionLength;
  const allPortions = Math.ceil(pagesList.length / portionLength);

  pagesList = pagesList
    .filter((item) => item > leftPortionItem && item <= rightPortionItem)
    .map((item) => {
      return (
        <li>
          <span
            className={item === currentPage && style.active}
            onClick={props.togglePages}
          >
            {item}
          </span>
        </li>
      );
    });

  return (
    <ul class={style.pagination}>
      {portionNumber > 1 && <li>
        <span onClick={() => setPortionNumber(portionNumber - 1)}>&laquo;</span>
      </li>}
      {portionNumber <= 1 && <div></div>}  
      {pagesList}
      {portionNumber < allPortions && <li>
        <span onClick={() => setPortionNumber(portionNumber + 1)}>&raquo;</span>
      </li>}
    </ul>
  );
};

export default Paginator;
