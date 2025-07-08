import { useState } from "react";

const Statistics = ({ props }) => {
  const [g, n, b] = props;
  return (
    <div>
      <p>statistics</p>
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
        <p>give feedback</p>
        <button onClick={handleGoodRate}>good</button>
        <button onClick={handleNeutralRate}>neutral</button>
        <button onClick={handleBadRate}>bad</button>
      </div>
      <Statistics props={[goodRate, neutralRate, badRate]} />
    </div>
  );
};

export default App;
