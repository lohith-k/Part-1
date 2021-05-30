import './App.css';
import React, { useState } from 'react'


function App() {
  const [good, setgood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setbad] = useState(0)

  const clickgood = () => {
    setgood(good+1)
  }
  const clickneutral = () => {
    setneutral(neutral+1)
  }
  const clickbad = () => {
    setbad(bad+1)
  }
  const all=good+bad+neutral
  const avg=(good-bad)/all
  const positive=(good/all)*100
  

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <button onClick={clickgood}  >good</button>
      <button onClick={clickneutral}  >neutral</button>
      <button onClick={clickbad}  >bad</button>
      <br />
      <h1>statistics</h1>
      <br />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all} </p>
      <p>average {avg} </p>
      <p>positive {positive} %</p>
      </div>
  )
}

export default App;
