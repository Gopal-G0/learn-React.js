import { useState } from "react";
import "./App.css";

function Statistics() {

  return (
    <div>
      
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Please Give Your Feedback</h2>
      <Feedback />
    </div>
  );
}

function Feedback() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodCount = () => {
    setGoodCount((goodCount) => goodCount + 1);
    handleTotal();
  };

  const handleNeutralCount = () => {
    setNeutralCount((neutralCount) => neutralCount + 1);
    handleTotal();
  };

  const handleBadCount = () => {
    setBadCount((badCount) => badCount + 1);
    handleTotal();
  };

  const handleTotal = (goodCount, neutralCount, badCount) => {
    const totalFeedback = goodCount + neutralCount + badCount;
    setTotal(() => totalFeedback);
  };
  if (total == 0) {
    return (
      <div>
        <span>
          <Button onClick={handleGoodCount} text="Good" />
          <Button onClick={handleNeutralCount} text="Neutral" />
          <Button onClick={handleBadCount} text="Bad" />
        </span>
      </div>
    );
  }

  return (
    <div>
      <span>
        <Button onClick={handleGoodCount} text="Good" />
        <Button onClick={handleNeutralCount} text="Neutral" />
        <Button onClick={handleBadCount} text="Bad" />
      </span>

      <h2>Feedback Stats</h2>

      <div>
        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
        <p>Total Feedbacks: {goodCount + neutralCount + badCount}</p>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <span>
      <button onClick={props.onClick}>{props.text}</button>
    </span>
  );
}

export default App;
