import React from "react";
import s from "./Statistics.module.css";

export const Statistics = (props) => {
  return (
    <ul className={s.List}>
      {Object.keys(props).map((prop) => (
        <li className={s.TitleList} key={prop}>
          {prop}: {props[prop]}
          {prop === "Positive" && "%"}
        </li>
      ))}
    </ul>
  );
};
