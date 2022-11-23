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
      <SectionHeader label={'Statistics'}/>
      <div>
        {spacer}
        <FeedbackCounter label="good" count={good} />
        {spacer}
        <FeedbackCounter label="neutral" count={neutral} />
        {spacer}
        <FeedbackCounter label="bad" count={bad} />
        {spacer}
      </div>
    </div>
  )
}

export default App;

const SectionHeader = ({label}) => <h2>{label}</h2>;

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick} >{label}</button>
  );
}

const FeedbackCounter = ({label, count}) => <><span>{label}: {count}</span></>

const Spacer = () => <div style={{height: 10, width: 10, display: 'inline-block'}} />

const spacer = <Spacer/>;