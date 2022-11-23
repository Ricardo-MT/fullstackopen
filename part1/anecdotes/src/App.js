import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [votes, setVotes] = useState(anecdotes.map( _ => 0));
   
  const [selected, setSelected] = useState(0);

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const handleVoteAnecdote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  const getMostVotesIndex = () => {
    let bestIndex;
    let best = -1;
    votes.forEach((v, i) => {
      if (v > best){
        best = v;
        bestIndex = i;
      }
    });
    return bestIndex;
  }

  return (
    <div>
      <SectionHeader label='Anecdote of the day' />
      {anecdotes[selected]}
      <div>
        <span>has {votes[selected]} anecdotes</span>
      </div>
      <div>
        <button onClick={handleVoteAnecdote} >VOTE +</button>
        <button onClick={handleNextAnecdote} >NEXT ANECDOTE</button>
      </div>
      <SectionHeader label='Anecdote with most votes' />
      {anecdotes[getMostVotesIndex()]}
    </div>
  )
}

export default App

const SectionHeader = ({label}) => <h2>{label}</h2>;
