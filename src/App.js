import React from 'react'
import './App.css';
import WordCard from './WordCard';
import HintCard from './HintCard';

const hint ='Hint'
const word = "Hello";
function App() {
  return (
    <div>
      <WordCard value={word} />
      <HintCard value={hint} />
    </div>
  );
}
export default App;
