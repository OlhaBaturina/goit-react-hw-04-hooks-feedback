import React, { useState, useEffect } from "react";
import s from "./App.module.css";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(1);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const feedbackValue = ["Good", "Neutral", "Bad"];

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
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          increment={handleStateIncrement}
          feedback={feedbackValue}
        />
      </Section>

      <Section title={"Statistics"}>
        {total === 0 ? (
          <Notification message={"No feedback given"} />
        ) : (
          <Statistics
            Good={good}
            Neutral={neutral}
            Bad={bad}
            Total={total}
            Positive={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
