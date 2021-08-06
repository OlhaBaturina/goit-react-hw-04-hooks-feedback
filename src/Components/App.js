import React, { Component, useState } from "react";
import s from "./App.module.css";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import CounterHook from "./CounterHook/CounterHook";

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  visibleStatistics = false;

  handelBtnClick = (event) => {
    this.visibleStatistics = true;
    this.setState((prevState) => {
      const { target } = event;
      const value = target.textContent.toLowerCase();
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return (total === 0 ? 0 : (good / total) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handelBtnClick}
          />
        </Section>

        <Section title={"Statistics"}>
          {this.visibleStatistics === true ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
        <CounterHook />
      </div>
    );
  }
}
