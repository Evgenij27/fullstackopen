import { useState } from "react";

const Statistics = ({ props }) => {
  const [g, n, b] = props;
  const all = g + n + b;
  if (all === 0) {
    return (
      <div>
        <p>No feedback given </p>
      </div>
    );
  }
  return (
    <div>
      <p>good: {g} </p>
      <p>neutral: {n} </p>
      <p>bad: {b} </p>
      <p>all: {g + n + b}</p>
      <p>average: {(g - b) / (g + b + n)}</p>
      <p>positive: {(g / (g + n + b)) * 100}%</p>
    </div>
  );
};

const App = () => {
  const [goodRate, setGoodRate] = useState(0);
  const [neutralRate, setNeutralRate] = useState(0);
  const [badRate, setBadRate] = useState(0);

  const handleGoodRate = () => {
    setGoodRate(goodRate + 1);
  };

  const handleNeutralRate = () => {
    setNeutralRate(neutralRate + 1);
  };

  const handleBadRate = () => {
    setBadRate(badRate + 1);
  };

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={handleGoodRate}>good</button>
        <button onClick={handleNeutralRate}>neutral</button>
        <button onClick={handleBadRate}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <Statistics props={[goodRate, neutralRate, badRate]} />
      </div>
    </div>
  );
};

export default App;
