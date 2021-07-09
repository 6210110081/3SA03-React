import React from 'react'
import './App.css';
import HintCard from './HintCard';
import WordCard from './WordCard';

const word = "Hello";
const hint ='Hint'
function App() {
  return (
    <div>
      <WordCard value={word} />
      <HintCard value={hint} />
    </div>

  );
}
export default App;
