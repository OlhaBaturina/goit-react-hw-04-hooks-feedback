import React, { useState, useEffect } from "react";
import s from "./App.module.css";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(1);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleStateIncrement = (e) => {
    const value = e.target.textContent.toLowerCase();
    console.log(value);

    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
    }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(Math.round(total === 0 ? 0 : (good / total) * 100));
  }, [good, neutral, bad, total]);

  return (
    <div className={s.container}>
      <h2 className={s.mainTitle}>Please leave feedback</h2>
      <FeedbackOptions
        increment={handleStateIncrement}
        feedback={["Good", "Neutral", "Bad"]}
      />

      {total === 0 ? (
        <p className={s.message}>No feedback given</p>
      ) : (
        <ul className={s.List}>
          <li className={s.TitleList}>Good: {good}</li>
          <li className={s.TitleList}>Neutral: {neutral}</li>
          <li className={s.TitleList}>Bad: {bad}</li>
          <li className={s.TitleList}>Total: {total}</li>
          <li className={s.TitleList}>
            Positive feedback: {positivePercentage} %
          </li>
        </ul>
      )}
    </div>
  );
}
