import React from "react";
import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    // console.log("Left Before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    // console.log("Left After", left);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='Left'/>
      <Button onClick={handleRightClick} text='Right'/>
      {right}
      {/* <p>{allClicks.join(" ")}</p> */}
      <p>totalClicks: {total}</p>
      <History allClicks={allClicks}/>
    </div>
  );
}

function History(props) {
  if(props.allClicks.length == 0) {
    return (
      <div>
        The App is used by pressing the buttons
      </div>
    );
  }

  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  );
}

function Button({ onClick, text }) {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default App;
