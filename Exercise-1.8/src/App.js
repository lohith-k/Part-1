import './App.css';
import React, { useState } from 'react'
const Statistics=(props) =>{
  const all=props.good+props.bad+props.neutral
  const avg=(props.good-props.bad)/all
  const positive=(props.good/all)*100
  return(
  <div>
<h2>statistics</h2>
      <br />
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all} </p>
      <p>average {avg} </p>
      <p>positive {positive} %</p>
      </div>
  )
}

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
  

  return (
    <div>
    <center>
      <h1>Please give feedback</h1>
      <br/>
      <button onClick={clickgood}  >good</button>
      <button onClick={clickneutral}  >neutral</button>
      <button onClick={clickbad}  >bad</button>
      <br />
      </center>
      <Statistics good={good} bad ={bad} neutral={neutral}></Statistics>
      </div>
      
  )
}

export default App;
