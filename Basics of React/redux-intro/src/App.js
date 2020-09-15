import React from 'react';
import './App.css';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import IncreaseCounter from './components/IncreaseCounter';

function App() {
  return (
    <div>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
    </div>
  );
}

export default App;
