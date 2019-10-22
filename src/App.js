import React from 'react';
import './App.css';
import CounterGroup from "./components/CounterGroup/CounterGroup";
import CounterWithReduxState from "./components/Counter/CounterWithReduxState";

function App() {
  return (
    <div className="App-header">
      {/*<CounterGroup defaultCount={3} />*/}
        <CounterWithReduxState />
    </div>
  );
}

export default App;
