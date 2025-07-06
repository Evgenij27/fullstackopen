import { useState } from "react";

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
      <div>
        <p>statistics</p>
        <p>good: {goodRate} </p>
        <p>neutral: {neutralRate} </p>
        <p>bad: {badRate} </p>
      </div>
    </div>
  );
};

export default App;
