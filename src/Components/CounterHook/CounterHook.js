import React, { useState, useEffect } from "react";
import s from "./CounterHook.module.css";

export default function CounterHook() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(1);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleGoodIncrement = () => {
    setGood((prevState) => prevState + 1);
  };

  const handleNeutralIncrement = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const handleBadIncrement = () => {
    setBad((prevState) => prevState + 1);
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

      <div className={s.buttonContainer}>
        <button
          type="button"
          className={s.button}
          onClick={handleGoodIncrement}
        >
          Good
        </button>
        <button
          type="button"
          className={s.button}
          onClick={handleNeutralIncrement}
        >
          Neutral
        </button>
        <button type="button" className={s.button} onClick={handleBadIncrement}>
          Bad
        </button>
      </div>
      {total === 0 ? (
        <p className={s.message}>No feedback given</p>
      ) : (
        <ul className={s.List}>
          <li className={s.TitleList}>Good: {good}</li>
          <li className={s.TitleList}>Neutral: {neutral}</li>
          <li className={s.TitleList}>Bad: {bad}</li>
          <li className={s.TitleList}>Total: {total}</li>
          <li className={s.TitleList}>
            Positive percentage: {positivePercentage} %
          </li>
        </ul>
      )}
    </div>
  );
}
