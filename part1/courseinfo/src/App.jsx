import { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div>
        <Display counter={counter} />
        <Button text="Increment" onClick={handleClick} />
      </div>
      <div>
        <Button text="Reset" onClick={resetCounter} />
      </div>
    </>
  );
};

export default App;
