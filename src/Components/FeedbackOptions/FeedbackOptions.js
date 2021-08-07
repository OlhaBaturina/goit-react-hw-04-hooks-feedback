import React from "react";
import s from "./FeedbackOption.module.css";

export const FeedbackOptions = ({ increment, feedback }) => {
  return (
    <div className={s.buttonContainer}>
      {feedback.map((value) => (
        <button
          key={value}
          type="button"
          className={s.button}
          onClick={increment}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
