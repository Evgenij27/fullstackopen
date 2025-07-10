import { useState } from "react";

const StatisticsLine = ({ text, action }) => {
  const value = action();
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ props }) => {
  const [g, n, b] = props;
  const all = g + n + b;

  const display = (v) => {
    return () => v;
  };

  const sum = () => {
    return g + n + b;
  };

  const average = () => {
    return (g - b) / (g + b + n);
  };

  const positive = () => {
    return (g / (g + n + b)) * 100;
  };

  if (all === 0) {
    return (
      <div>
        <p>No feedback given </p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" action={display(g)} />
          <StatisticsLine text="neutral" action={display(n)} />
          <StatisticsLine text="bad" action={display(b)} />
          <StatisticsLine text="all" action={sum} />
          <StatisticsLine text="average" action={average} />
          <StatisticsLine text="positive" action={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
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
        <Button text="good" onClick={handleGoodRate} />
        <Button text="neutral" onClick={handleNeutralRate} />
        <Button text="bad" onClick={handleBadRate} />
      </div>
      <div>
        <h2>statistics</h2>
        <Statistics props={[goodRate, neutralRate, badRate]} />
      </div>
    </div>
  );
};

export default App;
