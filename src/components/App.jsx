import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {


  const [state, setState] = useState({good: 0, neutral: 0, bad: 0})
  

  const handleLeaveFeedback = event => {
    const { option } = event.target;
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1
    }))
  }
  
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };


    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
              />
              )}
          </Section>
      </>
    );
  }

 

