import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 54
  const addValue = () => {
    // console.log(counter);
    // counter++;
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    if (counter < 0) {
      setCounter(0);
    }
  };
  const removeValue = () => {
    console.log(counter);
    // counter--;
    setCounter(counter-1);
    if (counter < 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>hello world</h1>
      <h2>counter value is "{counter}"</h2>
      <button onClick={addValue}>value add {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
