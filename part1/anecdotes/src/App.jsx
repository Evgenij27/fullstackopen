import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const SIZE = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(SIZE).fill(0));
  const [pop, setPop] = useState(0);

  const nextInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  };

  const handleClick = () => {
    setSelected(nextInt(0, SIZE - 1));
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    if (copyVotes[selected] > copyVotes[pop]) {
      setPop(selected);
    }
    setVotes(copyVotes);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has votes: {votes[selected]}</p>
      <button onClick={handleClick}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <p>Popular</p>
      <p>
        {anecdotes[pop]} with {votes[pop]} votes
      </p>
    </div>
  );
}

export default App;
