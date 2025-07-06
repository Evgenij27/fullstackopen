import { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div> the app is used by pressing the buttons </div>;
  }
  return <div> button press history: {allClicks.join("")} </div>;
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight + 1);
  };

  return (
    <>
      <div>
        <Display counter={left} />
        <Button text="Left" onClick={handleLeftClick} />
      </div>
      <div>
        <Display counter={right} />
        <Button text="Right" onClick={handleRightClick} />
      </div>
      <History allClicks={allClicks} />
    </>
  );
};

export default App;
