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
    </div>
  )
}

export default App;

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;

  return (
    <>
      <SectionHeader label={'Statistics'}/>
      {
        good + neutral + bad === 0 ? 
          noFeedback :
          <table>
            <tbody>
              <StatisticLine  label="good" info={good} />
              <StatisticLine  label="neutral" info={neutral} />
              <StatisticLine  label="bad" info={bad} />
              <StatisticLine  label="all" info={all} />
              <StatisticLine  label="average" info={(good - bad) / all} />
              <StatisticLine  label="positive" info={(good / all) * 100 + ' %'} />
            </tbody>
          </table>
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

const StatisticLine  = ({label, info}) =>
<tr>
  <td>
    <span>{label}</span>
  </td>
  <td>
    <span>{info}</span>
  </td>
</tr>;

const NoFeedback = () => <div><span>No feedback given</span></div>

const noFeedback = <NoFeedback/>;

const Spacer = () => <div style={{height: 10, width: 10, display: 'inline-block'}} />

const spacer = <Spacer/>;