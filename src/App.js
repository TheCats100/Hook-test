import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="rendu">
      <h2>You clicked {count} times!</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>
        <label for="count">First count</label>
        <input 
          type="number" 
          id="count" 
          name="count"
          onChange={event=> setCount(Number(event.target.value))}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App