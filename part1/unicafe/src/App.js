import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (state, setter) => () => setter(state + 1);

  return (
    <div>
      <SectionHeader label={'Give feedback'}/>
      <div>
        {spacer}
        <Button label="good" onClick={handleClick(good, setGood)} />
        {spacer}
        <Button label="neutral" onClick={handleClick(neutral, setNeutral)} />
        {spacer}
        <Button label="bad" onClick={handleClick(bad, setBad)} />
        {spacer}
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <AdvancedStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <SectionHeader label={'Statistics'}/>
      {
        good + neutral + bad === 0 ? 
          noFeedback :
          <div>
            {spacer}
            <FeedbackCounter label="good" info={good} />
            {spacer}
            <FeedbackCounter label="neutral" info={neutral} />
            {spacer}
            <FeedbackCounter label="bad" info={bad} />
            {spacer}
          </div>
      }
    </>
  );
}

const AdvancedStatistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;

  return (
    <>
      <SectionHeader label={'More statistics'}/>
      {
        all === 0 ?
          noFeedback :
          <div>
            {spacer}
            <FeedbackCounter label="all" info={all} />
            <br/>
            {spacer}
            <FeedbackCounter label="average" info={(good - bad) / all} />
            <br/>
            {spacer}
            <FeedbackCounter label="positive" info={(good / all) * 100 + ' %'} />
            <br/>
            {spacer}
          </div>
      }
    </>
  );
}

const SectionHeader = ({label}) => <h2>{label}</h2>;

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick} >{label}</button>
  );
}

const FeedbackCounter = ({label, info}) => <><span>{label}: {info}</span></>

const NoFeedback = () => <div><span>No feedback given</span></div>

const noFeedback = <NoFeedback/>;

const Spacer = () => <div style={{height: 10, width: 10, display: 'inline-block'}} />

const spacer = <Spacer/>;